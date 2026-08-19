import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export default function Home() {
  return (
    <div className="container relative pb-20 mt-20 flex flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        Master Your Cyber Defense
      </h1>
      <p className="max-w-xl text-lg text-muted-foreground">
        Empowering you with the knowledge and tools to navigate the complex world of cybersecurity.
      </p>
      <div className="flex gap-4">
        <Link href="/get-started">
          <Button size="lg">Get Started</Button>
        </Link>
        <Link href="/pricing">
          <Button size="lg" variant="outline">
            View Pricing
          </Button>
        </Link>
      </div>

      <section className="mt-20 w-full">
        <h2 className="text-3xl font-bold mb-8">Our Core Offerings</h2>
        <Tabs defaultValue="tools" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="learn">Learn</TabsTrigger>
            <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
          </TabsList>
          <TabsContent value="tools">
            <Card>
              <CardHeader>
                <CardTitle>Cybersecurity Tools</CardTitle>
                <CardDescription>Explore our suite of tools to enhance your security posture.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="tools-search">Search Tools</Label>
                  <Input id="tools-search" placeholder="e.g., Vulnerability Scanner" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link href="/tools/whats-the-play">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle>What's the Play?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Analyze potential security risks in your digital interactions.</p>
                      </CardContent>
                    </Card>
                  </Link>
                  {/* Add more tool cards here */}
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/tools">
                  <Button variant="outline" className="w-full">View All Tools</Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="learn">
            <Card>
              <CardHeader>
                <CardTitle>Learning Resources</CardTitle>
                <CardDescription>Expand your cybersecurity knowledge with our comprehensive guides.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="learn-search">Search Topics</Label>
                  <Input id="learn-search" placeholder="e.g., Phishing Awareness" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link href="/learn/phishing-awareness">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle>Phishing Awareness</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Learn to identify and avoid phishing attacks.</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="/learn/zero-trust-architecture-for-small-businesses">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle>Zero Trust Architecture</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Understand the principles of Zero Trust for small businesses.</p>
                      </CardContent>
                    </Card>
                  </Link>
                  {/* Add more learning cards here */}
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/learn">
                  <Button variant="outline" className="w-full">Explore All Learning</Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="frameworks">
            <Card>
              <CardHeader>
                <CardTitle>Cybersecurity Frameworks</CardTitle>
                <CardDescription>Implement industry-standard frameworks for robust security.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="frameworks-search">Search Frameworks</Label>
                  <Input id="frameworks-search" placeholder="e.g., NIST CSF" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link href="/frameworks/nist-csf">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle>NIST CSF</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Enhance your cybersecurity with the NIST Cybersecurity Framework.</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="/frameworks/iso-27001">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle>ISO 27001</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Achieve international standards for information security management.</p>
                      </CardContent>
                    </Card>
                  </Link>
                  {/* Add more framework cards here */}
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/frameworks">
                  <Button variant="outline" className="w-full">Discover Frameworks</Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mt-20 w-full">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Expert Knowledge</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Leverage insights from seasoned cybersecurity professionals.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Actionable Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Utilize practical tools designed to improve your security posture.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Continuous Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Stay ahead of evolving threats with our up-to-date resources.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
