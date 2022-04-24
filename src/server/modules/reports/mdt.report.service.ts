import Report from "./mdt.report";

class ReportService {
    private reports: Report[] = [];

    public newReport(report: Report) {
        this.reports.push(report);
    }
}

export default ReportService;
