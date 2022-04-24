class Report {
    id: number;
    report_type: string;
    report_title: string;
    report_details: string;
    report_date: string;
    report_status: string;
    report_author: string;
    report_officers: string;
    report_criminals: string;
    report_vehicles: string;

    constructor(
        id: number,
        report_type: string,
        report_title: string,
        report_details: string,
        report_date: string,
        report_status: string,
        report_author: string,
        report_officers: string,
        report_criminals: string,
        report_vehicles: string
    ) {
        this.id = id;
        this.report_type = report_type;
        this.report_title = report_title;
        this.report_details = report_details;
        this.report_date = report_date;
        this.report_status = report_status;
        this.report_author = report_author;
        this.report_officers = report_officers;
        this.report_criminals = report_criminals;
        this.report_vehicles = report_vehicles;
    }
}

export default Report;
