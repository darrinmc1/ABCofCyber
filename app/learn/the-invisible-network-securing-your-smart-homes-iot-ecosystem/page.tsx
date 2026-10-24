import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { pageMeta } from "@/lib/seo"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Network, Router, Camera, RefreshCw } from "lucide-react"
import HumorBreak from "@/components/humor-break"
import { LessonAside } from "@/components/lesson-aside"

export const metadata: Metadata = pageMeta({
  title: "Smart-home devices that stay in their lane",
  description: "Default passwords, updates, and a guest network. The camera does not need to sit next to payroll.",
  path: "/learn/the-invisible-network-securing-your-smart-homes-iot-ecosystem",
})

export default function SmartHomeIotLesson() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          <Link href="/learn" className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Lessons
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100">
                <Network className="h-6 w-6 text-blue-700" />
              </div>
              <Badge className="bg-yellow-100 text-yellow-700">Intermediate</Badge>
              <Badge variant="outline">14 min</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              The Invisible Network: Securing Your Smart Home&apos;s IoT Ecosystem
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Every bulb, lock, and camera is another computer with a default password
              and a shaky update habit. The fix is boring, and it works.
            </p>
            <div className="flex flex-wrap gap-2">
              {["iot", "smart home", "default passwords", "guest network", "updates"].map((t) => (
                <span key={t} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The fridge is not the problem. The flat network is.</h2>
            <p className="text-slate-600 mb-4">
              A laptop gets patches. A lightbulb often does not. Many devices ship with
              a password printed on a sticker, or the word admin, and they are happy to
              talk to anything else on the Wi-Fi. The Mirai botnet (2016) was the loud
              version of this: cameras and recorders with factory passwords, borrowed
              into attacks their owners never saw.
            </p>
            <p className="text-slate-600">
              You do not need a home SOC. You need the device off the open internet, off
              the machine that does payroll, and off the password it shipped with.
            </p>
            <LessonAside>
              A smart lock is only as careful as the app account and the email that can
              reset it. The metal is fine. The inbox is the lock.
            </LessonAside>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Router className="h-5 w-5 text-blue-700" />
                  <div>
                    <CardTitle className="text-lg">Router first</CardTitle>
                    <CardDescription>The gateway is the one device that sees everyone.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 space-y-2">
                <p>Change the router admin password. Leave WPS off. Use WPA2 or WPA3, not an open network and not WEP.</p>
                <p>
                  Put bulbs, speakers, and cameras on a guest SSID or a separate VLAN if
                  the router can do it. The payroll laptop stays on the other network.
                  Guest isolation, where the router offers it, stops devices chatting to
                  each other.
                </p>
                <p>
                  Turn off UPnP if you do not know which ports it has opened. It exists
                  to punch holes. Cameras do not need a hole from the internet to your house.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Camera className="h-5 w-5 text-green-700" />
                  <div>
                    <CardTitle className="text-lg">Each device</CardTitle>
                    <CardDescription>Unique password. No port forward. Updates on.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                Change the default before the device joins anything. Do not reuse the
                Wi-Fi password. Do not forward a port so you can &ldquo;check the camera
                from anywhere&rdquo; unless the vendor&apos;s own relay is the path, and
                that account has MFA. If a device cannot be updated and cannot change
                its password, it does not belong on the same network as your files.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <RefreshCw className="h-5 w-5 text-amber-700" />
                  <div>
                    <CardTitle className="text-lg">Apps and accounts</CardTitle>
                    <CardDescription>The phone app is a key. Treat the account like one.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                MFA on the vendor account when it exists. Review the permissions the app
                asked for. When you sell or bin a device, remove it from the account and
                factory-reset it. A camera you gave away with your login still in it is
                still your camera.
              </CardContent>
            </Card>
          </div>

          <HumorBreak tag="iot" />

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">A Saturday list</h2>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600">
              <li>Router admin password, WPS off, firmware current.</li>
              <li>Guest network for the gadgets. Main network for laptops and phones.</li>
              <li>Every device off its factory password. MFA on the accounts that have it.</li>
              <li>No manual port forwards to cameras or drives.</li>
              <li>One device you cannot update: unplug it, or isolate it and accept the risk in writing.</li>
            </ol>
            <p className="text-slate-600 mt-4">
              Network Security covers segmentation at work. At home the same idea is a
              second Wi-Fi name. The bulb can still turn on. It just cannot browse the
              laptop.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
