import { Activity, Shield, AlertCircle, BarChart3, Lock, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SecurityControlsSection() {
  const controls = [
    {
      icon: <Activity className="h-8 w-8 text-blue-600" />,
      title: "Real-Time Monitoring",
      description: "Continuous visibility into your infrastructure and user behavior. Spot anomalies before they become incidents.",
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-blue-600" />,
      title: "Threat Intelligence",
      description: "Integrated threat feeds keep your team aware of emerging risks specific to your industry and attack surface.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "Compliance Dashboards",
      description: "Track your alignment with NIST, ISO 27001, and CIS in real-time. Evidence is organized automatically.",
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-600" />,
      title: "Access Control",
      description: "Principle of least privilege, enforced. Role-based access and multi-factor authentication as standard.",
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Incident Response",
      description: "Playbooks and automation reduce response time from hours to minutes when something actually goes wrong.",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Security Posture",
      description: "Aggregate your risk score across controls, infrastructure, and training. One view. No spreadsheets.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Built-In Capabilities
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Real-time monitoring, compliance tracking, and incident response tools designed for teams that actually need them to work.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {controls.map((control, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  {control.icon}
                  <CardTitle className="text-lg">{control.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">{control.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 md:p-8">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Why this matters</h3>
          <p className="text-slate-700 leading-relaxed">
            Security teams waste time stitching together point solutions and manual processes. A cohesive platform means fewer integrations, less alert fatigue, and more time spent on actual risk reduction instead of admin work. Your dashboard shows compliance status, threat indicators, and control effectiveness in one view so leadership gets clarity without needing a translator.
          </p>
        </div>
      </div>
    </section>
  )
}
