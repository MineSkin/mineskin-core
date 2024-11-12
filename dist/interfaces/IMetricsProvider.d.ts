import { Metric, Metrics } from "metrics-node";
export interface IMetricsProvider {
    getMetrics(): Metrics;
    getMetric(key: string): Metric;
}
