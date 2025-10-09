"use client";

import { Fragment, ReactNode } from "react";

type RawStep = {
  title: string;
  subtitle?: string;
  body: ReactNode;
};

type Step = {
  title: string;
  subtitle?: string;
  content: ReactNode;
};

const terminologyCards: { label: string; accent?: boolean }[] = [
  { label: "Assets", accent: true },
  { label: "Liabilities" },
  { label: "Capital" },
  { label: "Revenues" },
  { label: "Expenses" },
];

const profitabilityMetrics = [
  "Gross Profit %",
  "Operating Profit %",
  "Net Profit %",
];

const nonCurrentExamples = [
  "Land",
  "Buildings",
  "Machinery",
  "Motor Vehicles",
  "Computers",
  "Long-term Investments",
  "Goodwill",
  "Patents",
  "Trademarks",
  "Customized Software",
];

const currentExamples = [
  "Inventory",
  "Customer Receivables",
  "Rent Prepayments",
  "Advances To Suppliers",
  "Security Deposits",
  "Short-Term Investments",
  "Cash And Bank Balances",
];

const sampleIncomeRows: {
  label: string;
  amount: string;
  emphasis?: boolean;
}[] = [
  { label: "Products revenue", amount: "800" },
  { label: "Services revenue", amount: "200" },
  { label: "Total Revenue", amount: "1,000", emphasis: true },
  { label: "Direct materials", amount: "(220)" },
  { label: "Direct labour", amount: "(160)" },
  { label: "Other direct costs", amount: "(120)" },
  { label: "Cost Of Sales", amount: "(500)", emphasis: true },
  { label: "Gross Profit", amount: "500", emphasis: true },
  { label: "Selling and marketing expenses", amount: "(70)" },
  { label: "General and administrative expenses", amount: "(45)" },
  { label: "Network and IT expenses", amount: "(20)" },
  { label: "Research and development expenses", amount: "(15)" },
  { label: "Depreciation and amortization expenses", amount: "(50)" },
  { label: "Total Overheads", amount: "(200)" },
  { label: "Operating Profit", amount: "300", emphasis: true },
  { label: "Interest expenses", amount: "(25)" },
  { label: "Forex (Loss)/ Gain", amount: "(15)" },
  { label: "Interest income", amount: "10" },
  { label: "Total Financial Expenses", amount: "(30)" },
  { label: "Other income", amount: "5" },
  { label: "Profit Before Tax", amount: "275", emphasis: true },
  { label: "Corporation Tax", amount: "(125)" },
  { label: "Net Profit After Tax", amount: "150", emphasis: true },
];

const processSteps = [
  {
    step: "STEP 1",
    label: "Conceptual overview of revenue, expenses and profit/(loss)",
  },
  {
    step: "STEP 2",
    label: "Split expenses into direct and indirect",
  },
  {
    step: "STEP 3",
    label: "Income statements",
    accent: true,
  },
  {
    step: "STEP 4",
    label: "Introduce gross profit",
  },
];

type AppleRow = {
  label: string;
  values: [string, string, string];
  highlight?: boolean;
  muted?: boolean;
};

type AppleSection = {
  title?: string;
  rows: AppleRow[];
};

const appleSections: AppleSection[] = [
  {
    title: "Net sales:",
    rows: [
      {
        label: "Products",
        values: ["$ 294,866", "$ 298,085", "$ 316,199"],
        muted: true,
      },
      {
        label: "Services",
        values: ["$ 96,169", "$ 85,200", "$ 78,129"],
        muted: true,
      },
      {
        label: "Total net sales",
        values: ["391,035", "383,285", "394,328"],
        highlight: true,
      },
    ],
  },
  {
    title: "Cost of sales:",
    rows: [
      {
        label: "Products",
        values: ["185,233", "189,282", "201,471"],
        muted: true,
      },
      {
        label: "Services",
        values: ["25,119", "24,855", "22,075"],
        muted: true,
      },
      {
        label: "Total cost of sales",
        values: ["210,352", "214,137", "223,546"],
        muted: true,
      },
      {
        label: "Gross margin",
        values: ["180,683", "169,148", "170,782"],
        highlight: true,
      },
    ],
  },
  {
    title: "Operating expenses:",
    rows: [
      {
        label: "Research and development",
        values: ["31,370", "29,915", "26,251"],
        muted: true,
      },
      {
        label: "Selling, general and administrative",
        values: ["26,097", "24,932", "25,094"],
        muted: true,
      },
      {
        label: "Total operating expenses",
        values: ["57,467", "54,847", "51,345"],
        muted: true,
      },
    ],
  },
  {
    rows: [
      {
        label: "Operating income",
        values: ["123,216", "114,301", "119,437"],
      },
      {
        label: "Other income/(expense), net",
        values: ["269", "(565)", "(334)"],
        muted: true,
      },
      {
        label: "Income before provision for income taxes",
        values: ["123,485", "113,736", "119,103"],
      },
      {
        label: "Provision for income taxes",
        values: ["29,749", "16,741", "19,300"],
        muted: true,
      },
      {
        label: "Net income",
        values: ["$ 93,736", "$ 96,995", "$ 99,803"],
        highlight: true,
      },
    ],
  },
];

const BookmarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M6 3.5C6 2.67157 6.67157 2 7.5 2H16.5C17.3284 2 18 2.67157 18 3.5V21L12 17.5L6 21V3.5Z"
      stroke="#1d4ed8"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CelebrationGraphic = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="160"
    height="160"
    viewBox="0 0 160 160"
    fill="none"
  >
    <rect x="16" y="88" width="128" height="48" rx="12" fill="#1d4ed8" />
    <path
      d="M32 96L80 128L128 96V80C128 66.7452 117.255 56 104 56H56C42.7452 56 32 66.7452 32 80V96Z"
      fill="#ffffff"
    />
    <path
      d="M80 120L124 92"
      stroke="#0f172a"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M80 120L36 92"
      stroke="#0f172a"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="52" cy="48" r="18" fill="#f97316" />
    <circle cx="80" cy="40" r="18" fill="#22c55e" />
    <circle cx="108" cy="48" r="18" fill="#ef4444" />
    <path
      d="M52 30C52 30 51 18 40 16"
      stroke="#ea580c"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M80 22C80 22 80 10 93 8"
      stroke="#15803d"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M108 30C108 30 109 18 120 16"
      stroke="#dc2626"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

const StepLayout = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) => (
  <div style={{ fontFamily: "'Inter', sans-serif", color: "#0f172a" }}>
    <header
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: subtitle ? "12px" : "20px",
      }}
    >
      <BookmarkIcon />
      <h2
        style={{
          margin: 0,
          fontSize: "1.75rem",
          fontWeight: 700,
          color: "#1d4ed8",
        }}
      >
        {title}
      </h2>
    </header>
    {subtitle && (
      <p
        style={{
          fontSize: "1.1rem",
          fontWeight: 600,
          color: "#111827",
          margin: 0,
          marginBottom: "12px",
        }}
      >
        {subtitle}
      </p>
    )}
    <div>{children}</div>
  </div>
);

const SampleIncomeStatementTable = () => (
  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "24px",
      fontSize: "0.95rem",
    }}
  >
    <thead>
      <tr>
        <th
          style={{
            textAlign: "left",
            paddingBottom: "12px",
            color: "#64748b",
            fontWeight: 500,
          }}
        >
          Description
        </th>
        <th
          style={{
            textAlign: "right",
            paddingBottom: "12px",
            color: "#64748b",
            fontWeight: 500,
          }}
        >
          US$ '000
        </th>
      </tr>
    </thead>
    <tbody>
      {sampleIncomeRows.map((row) => {
        const isNegative = row.amount.includes("(");
        return (
          <tr key={row.label}>
            <td
              style={{
                padding: "8px 0",
                fontWeight: row.emphasis ? 700 : 500,
                color: row.emphasis ? "#111827" : "#1f2937",
              }}
            >
              {row.label}
            </td>
            <td
              style={{
                padding: "8px 0",
                textAlign: "right",
                fontWeight: row.emphasis ? 700 : 500,
                color: isNegative ? "#ef4444" : "#111827",
                backgroundColor: row.emphasis ? "#f3f4f6" : "transparent",
                borderRadius: "8px",
              }}
            >
              {row.amount}
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

const AppleIncomeTable = ({ highlight }: { highlight?: boolean }) => (
  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
      fontSize: "0.95rem",
    }}
  >
    <thead>
      <tr>
        <th
          style={{
            textAlign: "left",
            color: "#64748b",
            fontWeight: 500,
            paddingBottom: "12px",
          }}
        >
          (In US$ millions)
        </th>
        {["Sep-24", "Sep-23", "Sep-22"].map((year) => (
          <th
            key={year}
            style={{
              textAlign: "right",
              color: "#64748b",
              fontWeight: 500,
              paddingBottom: "12px",
            }}
          >
            {year}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {appleSections.map((section, sectionIndex) => (
        <Fragment key={sectionIndex}>
          {section.title && (
            <tr>
              <td
                colSpan={4}
                style={{
                  paddingTop: sectionIndex === 0 ? 0 : "18px",
                  paddingBottom: "8px",
                  fontWeight: 600,
                  color: "#111827",
                }}
              >
                {section.title}
              </td>
            </tr>
          )}
          {section.rows.map((row) => (
            <tr key={row.label}>
              <td
                style={{
                  padding: "6px 0",
                  color: row.muted ? "#475569" : "#111827",
                  fontWeight: row.highlight ? 700 : 500,
                }}
              >
                {row.label}
              </td>
              {row.values.map((value, index) => (
                <td
                  key={`${row.label}-${index}`}
                  style={{
                    padding: "6px 0",
                    textAlign: "right",
                    fontWeight: row.highlight ? 700 : 500,
                    color:
                      value.includes("(") || value.includes(")")
                        ? "#ef4444"
                        : "#111827",
                    backgroundColor:
                      highlight && row.highlight ? "#d9f99d" : "transparent",
                  }}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </Fragment>
      ))}
    </tbody>
  </table>
);

const rawSteps: RawStep[] = [
  {
    title: "Overview",
    subtitle: "5 key financial terminologies:",
    body: (
      <div style={{ marginTop: "16px" }}>
        <p
          style={{
            fontSize: "1rem",
            color: "#334155",
            marginBottom: "18px",
          }}
        >
          Build a clear vocabulary before diving into financial statements.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {terminologyCards.map((item) => (
            <div
              key={item.label}
              style={{
                padding: "14px 18px",
                borderRadius: "16px",
                backgroundColor: item.accent ? "#8bc34a" : "#f3f4f6",
                color: item.accent ? "#ffffff" : "#94a3b8",
                fontWeight: item.accent ? 700 : 600,
                boxShadow: item.accent
                  ? "0 12px 24px rgba(139, 195, 74, 0.25)"
                  : "none",
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Congratulations",
    body: (
      <div
        style={{
          marginTop: "12px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "28px",
        }}
      >
        <div
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "28px",
            background: "linear-gradient(135deg, #eff6ff 0%, #e0f2fe 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CelebrationGraphic />
        </div>
        <div style={{ flex: 1, fontSize: "1.05rem", lineHeight: 1.8 }}>
          <p style={{ color: "#111827", marginBottom: "16px" }}>
            You have been selected by your organization to undertake this
            development program.
          </p>
          <p style={{ color: "#0f172a", marginBottom: "16px" }}>
            By enhancing your knowledge and understanding of business finance,
            your management is building a foundation for better decision-making
            across your organization.
          </p>
          <p style={{ color: "#0f172a", marginBottom: "16px" }}>
            This strategic investment by your management underscores their
            commitment to staff career development.
          </p>
          <p style={{ color: "#1d4ed8", fontWeight: 700 }}>
            We hope you will make the most of this opportunity!
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "What Are Assets?",
    body: (
      <div style={{ marginTop: "16px" }}>
        <p
          style={{
            fontSize: "1.1rem",
            fontWeight: 600,
            color: "#cbd5f5",
            marginBottom: "20px",
          }}
        >
          Assets are simply any resources owned or controlled by a business.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            color: "#111827",
            marginBottom: "16px",
          }}
        >
          They have two key characteristics:
        </p>
        <ol
          style={{
            marginLeft: "20px",
            color: "#111827",
            fontSize: "1.05rem",
            lineHeight: 1.7,
          }}
        >
          <li style={{ marginBottom: "12px" }}>
            The business is expected to benefit from their use now and in the
            future.
          </li>
          <li>Their value, in monetary terms, can be reliably determined.</li>
        </ol>
      </div>
    ),
  },
  {
    title: "Overview",
    body: (
      <div style={{ marginTop: "16px" }}>
        <p
          style={{
            color: "#94a3b8",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            marginBottom: "24px",
          }}
        >
          Now that you understand income statements well, we will introduce
          three profitability metrics that are used extensively in business.
          These metrics are calculated at different stages of an income
          statement and highlight different types of profitability.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            color: "#0f172a",
            marginBottom: "16px",
          }}
        >
          They are:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {profitabilityMetrics.map((metric) => (
            <div
              key={metric}
              style={{
                padding: "14px 18px",
                borderRadius: "14px",
                backgroundColor: "#f4f4f6",
                color: "#2563eb",
                fontWeight: 700,
                width: "fit-content",
              }}
            >
              {metric}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Both Types Of Assets Together",
    body: (
      <div style={{ marginTop: "16px" }}>
        <p
          style={{
            color: "#111827",
            fontSize: "1.05rem",
            marginBottom: "18px",
          }}
        >
          Assets are split into two major classifications:
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          <div
            style={{
              backgroundColor: "#f8fafc",
              borderRadius: "20px",
              padding: "20px",
              border: "1px solid #e2e8f0",
            }}
          >
            <div
              style={{
                backgroundColor: "#e2e8f0",
                borderRadius: "16px",
                padding: "12px 18px",
                fontWeight: 700,
                color: "#1d4ed8",
                width: "fit-content",
                marginBottom: "16px",
              }}
            >
              Non-current assets
            </div>
            <p
              style={{
                color: "#0f172a",
                fontSize: "0.98rem",
                marginBottom: "16px",
              }}
            >
              These are resources that are expected to generate commercial
              benefits for more than the next 12 months.
            </p>
            <p
              style={{
                fontWeight: 700,
                color: "#111827",
                marginBottom: "12px",
              }}
            >
              Examples
            </p>
            <ul
              style={{
                marginLeft: "18px",
                lineHeight: 1.6,
                color: "#1f2937",
              }}
            >
              {nonCurrentExamples.map((example) => (
                <li key={example} style={{ marginBottom: "6px" }}>
                  {example}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              backgroundColor: "#f8fafc",
              borderRadius: "20px",
              padding: "20px",
              border: "1px solid #e2e8f0",
            }}
          >
            <div
              style={{
                backgroundColor: "#e2e8f0",
                borderRadius: "16px",
                padding: "12px 18px",
                fontWeight: 700,
                color: "#1d4ed8",
                width: "fit-content",
                marginBottom: "16px",
              }}
            >
              Current assets
            </div>
            <p
              style={{
                color: "#0f172a",
                fontSize: "0.98rem",
                marginBottom: "16px",
              }}
            >
              These are resources that are expected to be used up or converted
              into cash within the coming 12 months.
            </p>
            <p
              style={{
                fontWeight: 700,
                color: "#111827",
                marginBottom: "12px",
              }}
            >
              Examples
            </p>
            <ul
              style={{
                marginLeft: "18px",
                lineHeight: 1.6,
                color: "#1f2937",
              }}
            >
              {currentExamples.map((example) => (
                <li key={example} style={{ marginBottom: "6px" }}>
                  {example}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "What Does It Show?",
    body: (
      <div style={{ marginTop: "16px" }}>
        <div
          style={{
            backgroundColor: "#8bc34a",
            borderRadius: "28px",
            padding: "28px",
            color: "#ffffff",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            maxWidth: "480px",
          }}
        >
          <h3 style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0 }}>
            Gross Profit %
          </h3>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <div>
              <p style={{ fontWeight: 700, marginBottom: "6px" }}>Measures</p>
              <p style={{ margin: 0 }}>
                How much profit remains after removing production costs from
                revenue.
              </p>
            </div>
            <div>
              <p style={{ fontWeight: 700, marginBottom: "6px" }}>Formula</p>
              <p style={{ margin: 0 }}>(Gross Profit / Revenue) x 100</p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "28px" }}>
          <h4
            style={{
              color: "#2563eb",
              fontWeight: 700,
              fontSize: "1.05rem",
              marginBottom: "12px",
            }}
          >
            Cost management efficiency
          </h4>
          <p style={{ color: "#0f172a", lineHeight: 1.7, marginBottom: "12px" }}>
            It helps assess how well a company controls its production costs.
          </p>
          <p style={{ color: "#0f172a", lineHeight: 1.7 }}>
            A decreasing percentage may signal rising production costs.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Sample Income Statement",
    body: (
      <div style={{ marginTop: "16px" }}>
        <div style={{ marginBottom: "16px", color: "#111827" }}>
          <p style={{ fontWeight: 700, marginBottom: "4px" }}>A Limited</p>
          <p style={{ fontWeight: 600, marginBottom: "4px" }}>
            Income statement
          </p>
          <p style={{ color: "#475569" }}>
            For the year ended December 31st 2024
          </p>
        </div>
        <SampleIncomeStatementTable />
      </div>
    ),
  },
  {
    title: "Step 3",
    body: (
      <div style={{ marginTop: "16px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              background: "radial-gradient(circle at top, #fde68a 0%, #fcd34d 100%)",
              borderRadius: "180px",
              padding: "32px",
              minHeight: "260px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "18px",
            }}
          >
            {processSteps.map((item) => (
              <div
                key={item.step}
                style={{
                  opacity: item.accent ? 1 : 0.35,
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    color: "#1f2937",
                  }}
                >
                  {item.step}
                </span>
                <span
                  style={{
                    fontWeight: item.accent ? 700 : 600,
                    color: "#1f2937",
                    fontSize: "0.95rem",
                    textTransform: "uppercase",
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ color: "#1f2937", fontSize: "1.05rem" }}>
              Split revenue into product and service revenue.
            </p>
            <p style={{ color: "#1f2937", fontSize: "1.05rem" }}>
              Split direct expenses into material, labour and other direct
              costs.
            </p>
            <p style={{ color: "#1f2937", fontSize: "1.05rem" }}>
              Split indirect expenses into sales, marketing, general,
              administrative and research and development.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Needed Information In Highlighted Cells",
    body: (
      <div style={{ marginTop: "16px" }}>
        <AppleIncomeTable highlight />
        <p
          style={{
            marginTop: "16px",
            fontSize: "0.85rem",
            color: "#64748b",
            lineHeight: 1.6,
          }}
        >
          We are including selected excerpts of reported financial results to
          help non-financial professionals understand how global brands present
          their financial statements. These extracts are provided solely for
          educational purposes and do not constitute financial advice.
        </p>
      </div>
    ),
  },
  {
    title: "Apple's 3 Year Income Statements",
    body: (
      <div style={{ marginTop: "16px" }}>
        <AppleIncomeTable />
        <p
          style={{
            marginTop: "16px",
            fontSize: "0.85rem",
            color: "#64748b",
            lineHeight: 1.6,
          }}
        >
          We are not affiliated with Apple, and all financial data remains the
          intellectual property of Apple Inc. For complete financial results,
          please visit the Apple investor relations page.
        </p>
      </div>
    ),
  },
];

export const secureData: Step[] = rawSteps.map((step) => ({
  title: step.title,
  subtitle: step.subtitle,
  content: (
    <StepLayout title={step.title} subtitle={step.subtitle}>
      {step.body}
    </StepLayout>
  ),
}));
