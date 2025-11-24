export interface Experience {
    role: string;
    company: string;
    period: string;
    description: string[];
}

export const experience: Experience[] = [
    {
        role: "Strategy & Operations Manager - Marketplace Efficiency",
        company: "Uber",
        period: "2022 -- Present",
        description: [
            "Oversee marketplace P&L for a +€500 M ARR business; set OKRs and model key cost levers.",
            "Led marketplace launch of Uber Eats in 50+ Dutch cities; kept fulfillment at ~98%+ while orders grew 6×.",
            "Built automated Python/SQL pipelines and Google-Sheets dashboards surfacing reliability, spend, and fraud KPIs.",
            "Managed transition from freelance to employment courier model under new legal regime.",
        ],
    },
    {
        role: "Operations Coordinator",
        company: "Uber",
        period: "2021",
        description: [
            "Owned courier incentive strategy; handed off execution to Territory Teams with automated dashboards.",
            "Built real-time surge/dispatch forecasting and led special-event playbooks.",
            "Served as team SQL & Python educator.",
        ],
    },
    {
        role: "Operations Analyst",
        company: "Uber",
        period: "2020",
        description: [
            "Created SQL dashboards tracking reliability, cost, and fraud.",
            "Modeled courier supply elasticity scenarios that informed 2020 budget planning.",
            "Supported crisis response during early COVID-19 lockdowns.",
        ],
    },
];
