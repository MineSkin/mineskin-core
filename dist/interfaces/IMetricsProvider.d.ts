import { Metric, Metrics } from "metrics-node";
export interface IMetricsProvider {
    getMetrics(): Promise<Metrics>;
    getMetric(key: string): Promise<Metric>;
}
