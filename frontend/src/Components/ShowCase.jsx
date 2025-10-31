"use client"

import { Target, Eye, Sprout, ArrowRight, Users, TrendingUp, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

// ✅ Fix: Accept props properly
function InteractiveCard({ icon: Icon, title, description, backIcon: BackIcon, backTitle, backDescription }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="relative h-[380px] sm:h-[420px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT SIDE */}
        <Card className="absolute inset-0 border-2 border-primary/30 hover:border-primary/60 transition-all hover:shadow-xl backface-hidden">
          <CardContent className="p-4 sm:p-6 md:p-8 h-full flex flex-col">
            <div className="mb-4 sm:mb-6 inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 animate-pulse-slow">
              <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{title}</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6 flex-grow">
              {description}
            </p>
            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground animate-bounce-slow text-sm sm:text-base">
              More <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          </CardContent>
        </Card>

        {/* BACK SIDE */}
        <Card className="absolute inset-0 border-2 border-accent/50 bg-accent/5 rotate-y-180 backface-hidden hover:shadow-xl">
          <CardContent className="p-4 sm:p-6 md:p-8 h-full flex flex-col">
            <div className="mb-4 sm:mb-6 inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent/20 animate-pulse-slow">
              <BackIcon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-accent">{backTitle}</h2>
            <p className="text-sm sm:text-base text-foreground leading-relaxed mb-4 sm:mb-6 flex-grow">
              {backDescription}
            </p>
            <Button className="w-full bg-primary hover:bg-primary/90 animate-bounce-slow text-sm sm:text-base">
              Learn More <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// ✅ Fix: Export default properly to avoid "does not provide an export named 'default'"
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance text-gray-900 animate-gradient px-2">
            About Evergrow Farms Ltd
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-2">
            A registered agribusiness transforming Rwanda's livestock sector through innovation, ethics, and community
            empowerment
          </p>
        </div>

        {/* ✅ Fix: Pass props correctly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
          <InteractiveCard
            icon={Target}
            title="Our Mission"
            description="To promote food security, reduce unemployment, and drive sustainable development by delivering high-quality pork products and advanced breeding agricultural practices empowering rural communities"
            backIcon={Users}
            backTitle="Community Impact"
            backDescription="We've empowered over 500 rural families, created 200+ jobs, and trained 1,000+ farmers in sustainable practices. Our mission drives real change in Rwanda's agricultural landscape."
          />

          <InteractiveCard
            icon={Eye}
            title="Our Vision"
            description="To become Rwanda's most trusted and innovative pork provider, leading the transformation of the livestock sector through ethical farming, community partnerships, and poverty reduction"
            backIcon={TrendingUp}
            backTitle="Growth & Innovation"
            backDescription="Leading Rwanda's agribusiness revolution with cutting-edge breeding techniques, sustainable farming methods, and technology-driven solutions that set new industry standards."
          />

          <InteractiveCard
            icon={Sprout}
            title="Our Values"
            description="Ethical farming practices, environmental sustainability, community engagement, a focus on youth employment, and unwavering commitment to quality and community impact"
            backIcon={Award}
            backTitle="Excellence & Ethics"
            backDescription="Certified organic practices, zero-waste initiatives, fair trade partnerships, and award-winning quality standards that prioritize both people and planet."
          />
        </div>
      </section>

    </main>
  )
}
