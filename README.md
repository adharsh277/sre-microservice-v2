# sre-metrics-demo
# 📊 SRE Metrics with Prometheus, Grafana & GitHub Actions

![Prometheus](https://img.shields.io/badge/Prometheus-Monitoring-orange?logo=prometheus)
![Grafana](https://img.shields.io/badge/Grafana-Dashboards-yellow?logo=grafana)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestration-blue?logo=kubernetes)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI/CD-green?logo=githubactions)
![SRE](https://img.shields.io/badge/SRE-SLIs/SLOs-red?logo=google)

---

## 📌 Project Overview

This project demonstrates **Site Reliability Engineering (SRE) principles** by implementing **SLIs, SLOs, and Error Budgets** with **Prometheus and Grafana**.  
It integrates monitoring, visualization, and automation to simulate real-world production reliability workflows.

---

## 🚀 What I Learned

- 📊 Defining **Service Level Indicators (SLIs)** – latency, error rate, availability  
- 🎯 Setting **Service Level Objectives (SLOs)** with error budgets  
- ⚙️ Deploying and configuring **Prometheus + Grafana** in Kubernetes  
- 🛠 Creating **dashboards & alerts** for proactive monitoring  
- 🔁 Automating deployment with **GitHub Actions**  
- 📈 Observability & reliability-focused DevOps practices  

---

## 🧰 Tech Stack

| Layer               | Tools / Tech                          |
|----------------------|----------------------------------------|
| **Monitoring**       | Prometheus                            |
| **Visualization**    | Grafana                               |
| **Orchestration**    | Kubernetes                            |
| **CI/CD**            | GitHub Actions                        |
| **Source Control**   | Git, GitHub                           |
| **SRE Skills**       | SLIs, SLOs, Error Budgets, Monitoring |

---

## 🏗️ Project Structure

sre-microservice/  
├── k8s/  
│   ├── deployment.yaml        # Microservice deployment  
│   ├── service.yaml           # Service definition  
│   ├── prometheus-rules.yaml  # SLIs & SLOs rules  
├── dashboards/  
│   └── sre-dashboard.json     # Grafana dashboard export  
├── .github/  
│   └── workflows/  
│       └── ci-cd.yml          # GitHub Actions pipeline  
└── README.md  

---

## ⚡ CI/CD Pipeline

The **GitHub Actions workflow** automates:  
1. **Build & push container image**  
2. **Deploy microservice to Kubernetes**  
3. **Apply Prometheus rules & Grafana dashboards**  
4. **Verify SLIs & trigger alerts if SLOs are violated**  

---
