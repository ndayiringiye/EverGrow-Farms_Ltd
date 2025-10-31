import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import React from 'react';
import HeroSection from '../Components/HeroSection.jsx';

// Mock lucide-react icons to simple components to avoid SVG complexity
vi.mock('lucide-react', () => ({
  ChevronLeft: (props) => <svg data-testid="chevron-left" {...props} />,
  ChevronRight: (props) => <svg data-testid="chevron-right" {...props} />,
}));

// Use fake timers for interval and animation timeouts
beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.runOnlyPendingTimers();
  vi.useRealTimers();
});

const advanceAll = (ms) => {
  // advance timers and flush microtasks
  vi.advanceTimersByTime(ms);
};

describe('HeroSection', () => {
  it('renders first slide content (title, highlight, description) initially', () => {
    render(<HeroSection />);
    expect(screen.getByRole('heading', { name: /Sustainable Farming/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Driven by Superior Genetics/i })).toBeInTheDocument();
    expect(
      screen.getByText(/we’re revolutionizing pork production in rwanda/i)
    ).toBeInTheDocument();

    // CTA buttons
    expect(screen.getByRole('button', { name: /Explore More/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Contact Us/i })).toBeInTheDocument();

    // Image alt should match title
    const img = screen.getByAltText(/Sustainable Farming/i);
    expect(img).toBeInTheDocument();
  });

  it('navigates to next and previous slides using arrow controls', () => {
    render(<HeroSection />);

    const nextBtn = screen.getByRole('button', { name: /Next slide/i });
    const prevBtn = screen.getByRole('button', { name: /Previous slide/i });

    // Next to slide 2
    fireEvent.click(nextBtn);
    // allow animation timeout to complete
    advanceAll(500);
    expect(screen.getByRole('heading', { name: /Delivering Quality Pork/i })).toBeInTheDocument();

    // Next to slide 3
    fireEvent.click(nextBtn);
    advanceAll(500);
    expect(screen.getByRole('heading', { name: /Empowering Farmers/i })).toBeInTheDocument();

    // Previous to slide 2
    fireEvent.click(prevBtn);
    advanceAll(500);
    expect(screen.getByRole('heading', { name: /Delivering Quality Pork/i })).toBeInTheDocument();
  });

  it('disables navigation buttons during animation to prevent rapid clicks', () => {
    render(<HeroSection />);

    const nextBtn = screen.getByRole('button', { name: /Next slide/i });

    // Start animation
    fireEvent.click(nextBtn);

    // While animating, button should be disabled
    expect(nextBtn).toBeDisabled();

    // After 500ms, should be enabled again
    advanceAll(500);
    expect(nextBtn).not.toBeDisabled();
  });

  it('can jump to a specific slide using pagination dots', () => {
    render(<HeroSection />);

    // Dots have aria-label: Go to slide X
    const dot2 = screen.getByRole('button', { name: /Go to slide 2/i });
    fireEvent.click(dot2);
    advanceAll(500);

    expect(screen.getByRole('heading', { name: /Delivering Quality Pork/i })).toBeInTheDocument();

    const dot4 = screen.getByRole('button', { name: /Go to slide 4/i });
    fireEvent.click(dot4);
    advanceAll(500);

    expect(screen.getByRole('heading', { name: /Building Stronger Breeds/i })).toBeInTheDocument();
  });

  it('auto-advances slides every 5 seconds', () => {
    render(<HeroSection />);

    // Initially slide 1
    expect(screen.getByRole('heading', { name: /Sustainable Farming/i })).toBeInTheDocument();

    // Advance 5s -> slide 2
    advanceAll(5000);
    // also allow animation to complete
    advanceAll(500);
    expect(screen.getByRole('heading', { name: /Delivering Quality Pork/i })).toBeInTheDocument();

    // Advance another 5s -> slide 3
    advanceAll(5000);
    advanceAll(500);
    expect(screen.getByRole('heading', { name: /Empowering Farmers/i })).toBeInTheDocument();
  });

  it('updates slide counter correctly', () => {
    render(<HeroSection />);
    // Counter displays currentSlide+1 padded and total padded
    // Expect 01 / 04 initially
    expect(screen.getByText(/01/i)).toBeInTheDocument();
    expect(screen.getByText(/04/i)).toBeInTheDocument();

    const nextBtn = screen.getByRole('button', { name: /Next slide/i });
    fireEvent.click(nextBtn);
    advanceAll(500);

    // Now should show 02
    expect(screen.getByText(/02/i)).toBeInTheDocument();
  });
});
