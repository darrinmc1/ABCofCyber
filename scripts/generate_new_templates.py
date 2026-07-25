#!/usr/bin/env python3
"""Generate 5 new ABC of Cyber downloadable PDF templates using fpdf2."""

from fpdf import FPDF
import os

OUTPUT_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "public", "downloads"
)
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Brand colours (ABC of Cyber -- indigo / violet family)
C_PRIMARY = (99, 102, 241)     # indigo-500
C_ACCENT = (139, 92, 246)      # violet-500
C_DARK = (15, 23, 42)          # slate-900
C_SLATE = (30, 41, 59)         # slate-800
C_GRAY = (100, 116, 139)       # slate-500
C_LIGHT = (226, 232, 240)      # slate-200
C_WHITE = (248, 250, 252)      # slate-50
C_BORDER = (51, 65, 85)        # slate-700
C_GREEN = (34, 197, 94)        # green-500
C_RED = (239, 68, 68)          # red-500
C_YELLOW = (234, 179, 8)       # yellow-500
C_LIGHT_BG = (30, 41, 59, 0.8)


class ABCPDF(FPDF):
    """Base PDF for all ABC of Cyber templates."""

    def __init__(self, title="Template"):
        super().__init__()
        self.template_title = title
        self.set_auto_page_break(auto=True, margin=25)

    def header(self):
        if self.page_no() == 1:
            return
        self.set_font("Helvetica", "I", 8)
        self.set_text_color(*C_GRAY)
        self.cell(0, 6, "ABC of Cyber", align="L")
        self.ln(2)
        self.set_draw_color(*C_PRIMARY)
        self.set_line_width(0.4)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(4)

    def footer(self):
        self.set_y(-20)
        self.set_font("Helvetica", "I", 7)
        self.set_text_color(*C_GRAY)
        self.cell(0, 10, f"ABC of Cyber | {self.template_title} | Page {self.page_no()}/{{nb}}", align="C")

    def title_block(self, title="", subtitle=""):
        """First-page title area with dark background block."""
        if not title:
            title = self.template_title
        self.set_fill_color(*C_DARK)
        self.rect(0, 0, 210, 55, "F")
        # accent line
        self.set_fill_color(*C_ACCENT)
        self.rect(0, 55, 210, 2.5, "F")
        self.set_y(16)
        self.set_font("Helvetica", "B", 22)
        self.set_text_color(*C_WHITE)
        self.cell(0, 10, title, align="C", new_x="LMARGIN", new_y="NEXT")
        if subtitle:
            self.set_font("Helvetica", "", 10)
            self.set_text_color(*C_LIGHT)
            self.cell(0, 8, subtitle, align="C", new_x="LMARGIN", new_y="NEXT")
        self.set_y(62)

    def section_title(self, title):
        self.ln(4)
        self.set_font("Helvetica", "B", 13)
        self.set_text_color(*C_ACCENT)
        self.cell(0, 8, title, new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(*C_BORDER)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(3)

    def sub_section(self, label, value=""):
        self.set_font("Helvetica", "B", 10)
        self.set_text_color(*C_WHITE)
        self.cell(0, 6, label, new_x="LMARGIN", new_y="NEXT")
        if value:
            self.set_font("Helvetica", "", 9)
            self.set_text_color(*C_LIGHT)
            self.multi_cell(0, 5, value)
            self.ln(1)

    def bullet(self, text):
        self.set_font("Helvetica", "", 9)
        self.set_text_color(*C_LIGHT)
        x = self.get_x()
        self.cell(6, 5, ">", new_x="END")
        self.set_x(x + 6)
        self.multi_cell(0, 5, text)
        self.ln(1)

    def table_header(self, cols, widths):
        """Draw a table header row with given column widths."""
        self.set_fill_color(*C_SLATE)
        self.set_draw_color(*C_BORDER)
        self.set_font("Helvetica", "B", 8)
        self.set_text_color(*C_WHITE)
        for i, col in enumerate(cols):
            self.cell(widths[i], 8, col, border=1, align="C", fill=True)
        self.ln()

    def table_row(self, row_data, widths, fill=False):
        """Draw a table row."""
        if fill:
            self.set_fill_color(*C_DARK)
        else:
            self.set_fill_color(*C_SLATE)
        self.set_draw_color(*C_BORDER)
        self.set_font("Helvetica", "", 8)
        self.set_text_color(*C_LIGHT)
        max_h = 8
        for i, cell in enumerate(row_data):
            self.cell(widths[i], max_h, cell, border=1, align="C", fill=True)
        self.ln()


# ── 1. PASSWORD POLICY TEMPLATE ─────────────────────────────────────────────

def generate_password_policy():
    pdf = ABCPDF("Password Policy Template")
    pdf.alias_nb_pages()
    pdf.add_page()
    pdf.title_block("Password Policy Template", "Establish robust password governance across your organisation")

    pdf.section_title("1. Password Length Requirements")
    pdf.bullet("Standard user accounts: minimum 12 characters")
    pdf.bullet("Privileged / administrative accounts: minimum 16 characters")
    pdf.bullet("Service accounts: minimum 20 characters with regular rotation")
    pdf.bullet("Passphrases (3+ random words) encouraged over complex strings")

    pdf.section_title("2. Password Complexity")
    pdf.bullet("Must contain characters from at least 3 of 4 categories: uppercase, lowercase, digits, special characters")
    pdf.bullet("No more than 3 consecutive identical characters permitted")
    pdf.bullet("Common password dictionary check enforced at creation")
    pdf.bullet("Contextual checks: no usernames, company name, or personal info in password")

    pdf.section_title("3. Password Expiry & History")
    pdf.bullet("Standard accounts: password expires every 90 days")
    pdf.bullet("Privileged accounts: password expires every 60 days")
    pdf.bullet("Password history: 12 unique passwords remembered (cannot reuse)")
    pdf.bullet("Maximum password age enforced; grace period of 24 hours before lockout")

    pdf.section_title("4. Multi-Factor Authentication (MFA)")
    pdf.bullet("MFA mandatory for all administrative and remote-access accounts")
    pdf.bullet("MFA required for all external-facing systems and VPN access")
    pdf.bullet("Accepted factors: TOTP authenticator app, hardware token (FIDO2/WebAuthn), or biometrics")
    pdf.bullet("SMS-based OTP only permitted when hardware/software tokens unavailable")

    pdf.add_page()
    pdf.section_title("5. Account Lockout Policy")
    pdf.bullet("Lockout threshold: 5 failed login attempts within a 15-minute window")
    pdf.bullet("Lockout duration: 30 minutes (automatic unlock) or administrator override")
    pdf.bullet("Failed attempt counter resets after 30 minutes of inactivity")
    pdf.bullet("Account lockout events logged and reported to Security Operations")

    pdf.section_title("6. Shared & Generic Accounts")
    pdf.bullet("Shared accounts prohibited unless approved by Information Security")
    pdf.bullet("Generic accounts (e.g., root, admin) must have passwords stored in an enterprise password manager")
    pdf.bullet("Individual accountability via session logging and named audit trails")
    pdf.bullet("Shared account credentials rotated immediately upon membership change")

    pdf.section_title("7. Enforcement & Compliance")
    pdf.bullet("Password policy enforced via Group Policy Object (GPO) or equivalent IAM controls")
    pdf.bullet("Quarterly automated compliance scans; manual exceptions require CISO sign-off")
    pdf.bullet("Non-compliant accounts flagged and quarantined within 48 hours")
    pdf.bullet("Annual policy review; updates approved by the Security Steering Committee")

    pdf.section_title("Document Control")
    pdf.sub_section("Policy Owner:", "Chief Information Security Officer (CISO)")
    pdf.sub_section("Effective Date:", "Date of publication")
    pdf.sub_section("Review Cycle:", "Annual or upon significant infrastructure change")
    pdf.sub_section("Classification:", "Internal - Confidential")

    path = os.path.join(OUTPUT_DIR, "password-policy-template.pdf")
    pdf.output(path)
    print(f"Created {path}")
    return path


# ── 2. SECURITY AWARENESS TRAINING LOG ──────────────────────────────────────

def generate_security_awareness_log():
    pdf = ABCPDF("Security Awareness Training Log")
    pdf.alias_nb_pages()
    pdf.add_page()
    pdf.title_block("Security Awareness Training Log", "Track employee security training completions and scores")

    pdf.section_title("Training Programme Overview")
    pdf.bullet("Programme: ABC of Cyber Security Awareness Training Suite")
    pdf.bullet("Modules: Phishing Awareness, Password Hygiene, Data Protection, Social Engineering, Incident Reporting, Remote Work Security, Physical Security")
    pdf.bullet("Mandatory completion frequency: Upon hire and annually thereafter")
    pdf.bullet("Minimum passing score: 80% per module")

    pdf.ln(4)
    pdf.section_title("Training Records")

    cols = ["Date", "Employee", "Department", "Module", "Score", "Cert.", "Next Due"]
    widths = [22, 30, 25, 38, 14, 16, 35]
    pdf.table_header(cols, widths)

    records = [
        ["02-Jan-2026", "Alice Munro", "Engineering", "Phishing Awareness", "92%", "Y", "02-Jan-2027"],
        ["02-Jan-2026", "Alice Munro", "Engineering", "Password Hygiene", "88%", "Y", "02-Jan-2027"],
        ["05-Jan-2026", "Bob Chen", "Finance", "Data Protection", "95%", "Y", "05-Jan-2027"],
        ["10-Jan-2026", "Carol Silva", "HR", "Social Engineering", "78%", "N", "10-Feb-2026"],
        ["12-Jan-2026", "David Park", "IT-Ops", "Incident Reporting", "100%", "Y", "12-Jan-2027"],
        ["15-Jan-2026", "Eve Johnson", "Legal", "Remote Work Security", "85%", "Y", "15-Jan-2027"],
        ["18-Jan-2026", "Frank Lee", "Engineering", "Physical Security", "90%", "Y", "18-Jan-2027"],
        ["22-Jan-2026", "Grace Kim", "Marketing", "Phishing Awareness", "82%", "Y", "22-Jan-2027"],
        ["25-Jan-2026", "Henry Brown", "Sales", "Password Hygiene", "91%", "Y", "25-Jan-2027"],
    ]

    for i, r in enumerate(records):
        pdf.table_row(r, widths, fill=(i % 2 == 0))

    pdf.ln(6)
    pdf.section_title("Compliance Summary")
    pdf.sub_section("Total Employees Tracked:", "9")
    pdf.sub_section("Modules Delivered:", "9 (up to 7 per employee)")
    pdf.sub_section("Pass Rate (>=80%):", "8 of 9 (88.9%)")
    pdf.sub_section("Certificates Issued:", "8")
    pdf.sub_section("Overdue for Retake:", "1 (Carol Silva - Social Engineering)")
    pdf.sub_section("Next Scheduled Training Batch:", "01-Feb-2026")

    path = os.path.join(OUTPUT_DIR, "security-awareness-log.pdf")
    pdf.output(path)
    print(f"Created {path}")
    return path


# ── 3. ACCESS CONTROL MATRIX ────────────────────────────────────────────────

def generate_access_control_matrix():
    pdf = ABCPDF("Access Control Matrix")
    pdf.alias_nb_pages()
    pdf.add_page()
    pdf.title_block("Access Control Matrix", "Role-based access rights mapping across systems and resources")

    pdf.section_title("Matrix Legend")
    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(*C_LIGHT)
    pdf.cell(10, 5, "R:", new_x="END")
    pdf.set_text_color(*C_GREEN)
    pdf.cell(10, 5, "Read", new_x="END")
    pdf.set_text_color(*C_LIGHT)
    pdf.cell(10, 5, "  W:", new_x="END")
    pdf.set_text_color(*C_PRIMARY)
    pdf.cell(10, 5, "Write", new_x="END")
    pdf.set_text_color(*C_LIGHT)
    pdf.cell(10, 5, "  A:", new_x="END")
    pdf.set_text_color(*C_RED)
    pdf.cell(10, 5, "Admin", new_x="END")
    pdf.set_text_color(*C_LIGHT)
    pdf.cell(10, 5, "  N:", new_x="END")
    pdf.set_text_color(*C_GRAY)
    pdf.cell(10, 5, "No Access", new_x="END")
    pdf.set_text_color(*C_LIGHT)
    pdf.ln(8)

    pdf.section_title("Access Rights Matrix")
    cols = ["System / Resource", "Admin", "Manager", "Analyst", "Engineer", "Auditor", "Intern"]
    widths = [44, 20, 22, 22, 22, 22, 22]
    pdf.table_header(cols, widths)

    rows = [
        ["HR Database",        "A",  "R",  "N",  "N",  "R",  "N"],
        ["Payroll System",     "A",  "R",  "N",  "N",  "R",  "N"],
        ["SIEM Platform",      "A",  "N",  "R",  "W",  "R",  "N"],
        ["Network Firewall",   "A",  "N",  "N",  "W",  "N",  "N"],
        ["Source Code Repo",   "A",  "N",  "N",  "W",  "R",  "R"],
        ["Email System",       "A",  "W",  "W",  "R",  "R",  "W"],
        ["CRM Platform",       "A",  "W",  "W",  "R",  "R",  "N"],
        ["Shared Drive D:",    "A",  "W",  "R",  "W",  "R",  "R"],
        ["Asset Inventory",    "A",  "A",  "W",  "W",  "R",  "N"],
        ["VPN Gateway",        "A",  "R",  "R",  "W",  "N",  "N"],
    ]

    for i, r in enumerate(rows):
        pdf.table_row(r, widths, fill=(i % 2 == 0))

    pdf.ln(4)
    pdf.section_title("Review & Sign-Off")
    pdf.sub_section("Last Reviewed:", "15-Jan-2026 by Information Security")
    pdf.sub_section("Next Scheduled Review:", "15-Apr-2026 (Quarterly)")
    pdf.sub_section("Approved By:", "CISO on 16-Jan-2026")
    pdf.sub_section("Exception Policy:", "Access outside this matrix requires an approved Access Request Form (ARF-001)")

    path = os.path.join(OUTPUT_DIR, "access-control-matrix.pdf")
    pdf.output(path)
    print(f"Created {path}")
    return path


# ── 4. VENDOR SECURITY ASSESSMENT ──────────────────────────────────────────

def generate_vendor_security_assessment():
    pdf = ABCPDF("Vendor Security Assessment")
    pdf.alias_nb_pages()
    pdf.add_page()
    pdf.title_block("Vendor Security Assessment", "Third-party risk evaluation and security posture scoring")

    pdf.section_title("Assessment Summary")
    pdf.bullet("Reviewed under the ABC of Cyber Third-Party Risk Management Programme")
    pdf.bullet("Assessments conducted quarterly or at time of new engagement")
    pdf.bullet("Risk ratings: Low / Medium / High / Critical")
    pdf.bullet("Approval required: Medium and above must be signed by CISO")

    pdf.ln(4)
    pdf.section_title("Vendor Assessment Records")

    cols = ["Vendor Name", "Service", "Data Access", "Certifications", "Risk", "Date", "Appr."]
    widths = [30, 30, 22, 38, 14, 22, 18]
    pdf.table_header(cols, widths)

    vendors = [
        ["CloudSync Inc.",  "Cloud Storage",     "PII (Level 3)",  "ISO 27001, SOC 2", "Medium", "10-Jan-2026", "Y"],
        ["MailSecure Ltd.", "Email Security",    "Metadata",       "ISO 27001",         "Low",    "12-Jan-2026", "Y"],
        ["DataVault Corp.", "Backup Services",   "PII (Level 2)",  "SOC 2, PCI DSS",    "Medium", "15-Jan-2026", "Y"],
        ["NetGuard Systems","Network Monitoring", "Logs only",     "ISO 27001, FedRAMP","Low",    "18-Jan-2026", "Y"],
        ["PayFlow Pro",     "Payment Gateway",   "Financial",      "PCI DSS Level 1",   "High",   "22-Jan-2026", "Y"],
        ["RemoteDesk LLC",  "Remote Access",     "Full endpoint",  "SOC 2",             "High",   "25-Jan-2026", "N"],
        ["AIChatBot Co.",   "Customer Support",  "Chat transcripts","None",              "Medium", "28-Jan-2026", "N"],
        ["LogStream Inc.",  "Log Aggregation",   "System logs",    "ISO 27001",         "Low",    "30-Jan-2026", "Y"],
        ["HRCloud",         "HR Management",     "PII (Level 3)",  "ISO 27001, SOC 2",  "Medium", "02-Feb-2026", "Y"],
        ["DevOpsPipe Inc.", "CI/CD Platform",    "Source code",    "SOC 2",             "High",   "05-Feb-2026", "N"],
    ]

    for i, r in enumerate(vendors):
        pdf.table_row(r, widths, fill=(i % 2 == 0))

    pdf.ln(4)
    pdf.section_title("Assessment Findings & Recommendations")
    pdf.sub_section("High-Risk Vendors Requiring Action:")
    pdf.bullet("PayFlow Pro: Approved with compensating controls -- quarterly penetration testing required")
    pdf.bullet("RemoteDesk LLC: NOT approved -- insufficient endpoint security controls; re-assess after remediation")
    pdf.bullet("DevOpsPipe Inc.: NOT approved -- requires contractual SLA for incident notification < 1 hour")
    pdf.sub_section("Next Assessment Cycle:", "01-May-2026")

    path = os.path.join(OUTPUT_DIR, "vendor-security-assessment.pdf")
    pdf.output(path)
    print(f"Created {path}")
    return path


# ── 5. BUSINESS CONTINUITY PLAN ────────────────────────────────────────────

def generate_business_continuity_plan():
    pdf = ABCPDF("Business Continuity Plan")
    pdf.alias_nb_pages()
    pdf.add_page()
    pdf.title_block("Business Continuity Plan", "Organisational resilience and recovery framework")

    pdf.section_title("1. Purpose")
    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(*C_LIGHT)
    pdf.multi_cell(0, 5, (
        "This Business Continuity Plan (BCP) establishes the framework and procedures to ensure "
        "that ABC of Cyber can maintain or rapidly resume critical business functions in the event "
        "of a significant disruption. The plan aligns with ISO 22301 and the NIST SP 800-34 "
        "contingency planning framework."
    ))
    pdf.ln(3)

    pdf.section_title("2. Scope")
    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(*C_LIGHT)
    pdf.multi_cell(0, 5, (
        "This plan applies to all business units, departments, and critical functions of ABC of Cyber. "
        "It covers disruptions arising from natural disasters, cyber attacks, infrastructure failures, "
        "pandemics, supply chain interruptions, and acts of terrorism. All employees, contractors, and "
        "third-party service providers must adhere to the procedures herein."
    ))
    pdf.ln(3)

    pdf.section_title("3. Critical Business Functions")
    pdf.bullet("Customer-facing platform availability (SaaS product)")
    pdf.bullet("Order-to-cash processing and billing")
    pdf.bullet("Incident response and security operations (SOC)")
    pdf.bullet("Customer support and communications")
    pdf.bullet("Payroll and financial operations")
    pdf.bullet("Regulatory compliance reporting")

    pdf.add_page()
    pdf.section_title("4. Recovery Time Objectives (RTOs) & Recovery Point Objectives (RPOs)")

    cols = ["Function", "RTO", "RPO", "Priority"]
    widths = [60, 40, 40, 30]
    pdf.table_header(cols, widths)

    rto_data = [
        ["Customer Platform",      "4 hours",  "1 hour",  "Critical"],
        ["Security Operations",    "1 hour",   "15 min",  "Critical"],
        ["Order-to-Cash",         "8 hours",  "4 hours",  "High"],
        ["Customer Support",      "4 hours",  "1 hour",   "High"],
        ["Payroll",               "24 hours", "24 hours", "Medium"],
        ["Compliance Reporting",  "48 hours", "24 hours", "Medium"],
    ]

    for i, r in enumerate(rto_data):
        pdf.table_row(r, widths, fill=(i % 2 == 0))

    pdf.ln(4)
    pdf.section_title("5. Backup Procedures")
    pdf.bullet("Production database: encrypted full backup every 6 hours to geographically separate region")
    pdf.bullet("File storage: continuous replication with 15-minute RPO")
    pdf.bullet("Configuration management: infrastructure-as-code stored in version control with PR-based changes")
    pdf.bullet("Offline/air-gapped backup: weekly full backup, stored in secure offsite facility")
    pdf.bullet("Backup restoration tested quarterly; results documented and reviewed by CISO")
    pdf.bullet("Encryption: all backups encrypted at rest (AES-256) and in transit (TLS 1.3)")

    pdf.section_title("6. Communication Tree")

    cols = ["Role", "Name", "Primary Contact", "Alternate Contact"]
    widths = [40, 30, 50, 50]
    pdf.table_header(cols, widths)

    comms = [
        ["CISO (Chair)",    "J. Reynolds",  "+1-555-0101",  "+1-555-0102"],
        ["CTO",             "S. Patel",     "+1-555-0201",  "+1-555-0202"],
        ["Head of Eng.",    "M. Torres",    "+1-555-0301",  "+1-555-0302"],
        ["SOC Lead",        "L. Kim",       "+1-555-0401",  "+1-555-0402"],
        ["PR Lead",         "A. Foster",    "+1-555-0501",  "+1-555-0502"],
        ["Legal Counsel",   "D. Okafor",    "+1-555-0601",  "+1-555-0602"],
        ["HR Director",     "P. Singh",     "+1-555-0701",  "+1-555-0702"],
    ]

    for i, r in enumerate(comms):
        pdf.table_row(r, widths, fill=(i % 2 == 0))

    pdf.ln(4)
    pdf.section_title("7. Plan Review & Maintenance")
    pdf.sub_section("Plan Owner:", "Chief Information Security Officer (CISO)")
    pdf.sub_section("Review Frequency:", "Quarterly (March, June, September, December)")
    pdf.sub_section("Last Reviewed:", "25-Dec-2025")
    pdf.sub_section("Next Scheduled Review:", "25-Mar-2026")
    pdf.sub_section("Drill Schedule:", "Tabletop exercise -- quarterly; Full-scale simulation -- annually")
    pdf.sub_section("Distribution:", "All Leadership, SOC, IT Operations, HR, Legal")

    path = os.path.join(OUTPUT_DIR, "business-continuity-plan.pdf")
    pdf.output(path)
    print(f"Created {path}")
    return path


# ── MAIN ────────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    print("Generating 5 new ABC of Cyber templates...")
    generate_password_policy()
    generate_security_awareness_log()
    generate_access_control_matrix()
    generate_vendor_security_assessment()
    generate_business_continuity_plan()
    print("Done! All 5 templates generated.")
