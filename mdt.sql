CREATE TABLE mdt_cprofiles (
    id INT auto_increment PRIMARY KEY,
    profile_cid INT NOT NULL,
    profile_notes VARCHAR(255) DEFAULT '',
    profile_mugshot VARCHAR(255) DEFAULT '',
    profile_convictions LONGTEXT DEFAULT '[]'
);

CREATE TABLE mdt_vprofiles (
    id INT auto_increment PRIMARY KEY,
    owner_cid INT NOT NULL,
    profile_plate VARCHAR(255) NOT NULL,
    profile_notes VARCHAR(255) DEFAULT '',
    profile_mugshot VARCHAR(255) DEFAULT '',
    profile_incidents LONGTEXT DEFAULT '[]',
    profile_status VARCHAR(255) DEFAULT 'VALID'
);

CREATE TABLE mdt_reports (
    id INT auto_increment PRIMARY KEY,
    report_type VARCHAR(255) NOT NULL,
    report_title VARCHAR(255) NOT NULL,
    report_details VARCHAR(255) NOT NULL,
    report_date DATETIME NOT NULL,
    report_status VARCHAR(255) DEFAULT 'VALID',
    report_author INT NOT NULL,
    report_officers LONGTEXT DEFAULT '[]',
    report_criminals LONGTEXT DEFAULT '[]',
    report_vehicles LONGTEXT DEFAULT '[]'
);

CREATE TABLE mdt_warrants (
    id INT auto_increment PRIMARY KEY,
    warrant_type VARCHAR(255) NOT NULL,
    warrant_title VARCHAR(255) NOT NULL,
    warrant_details VARCHAR(255) NOT NULL,
    warrant_expire DATETIME NOT NULL,
    warrant_status VARCHAR(255) DEFAULT 'VALID',
    warrant_author VARCHAR(255) NOT NULL
);

CREATE TABLE mdt_penalcode (
    id INT auto_increment PRIMARY KEY,
    penal_type VARCHAR(255) NOT NULL,
    penal_charges LONGTEXT DEFAULT '[]'
);