const topBtn = document.getElementById("topBtn");

// Show button when scrolling down 100px
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

// Scroll smoothly to top when clicked
topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Project data
const projects = [
    {
        name: "SMVR Analysis Dashboard",
        details: "A sophisticated Site Monitoring Visit Report (SMVR) system for clinical studies, built on AWS serverless stack using Lambda, Step Functions, S3, DynamoDB, and Bedrock Agents. Generates automated reports and Excel outputs."
    },
    {
        name: "Local Repository System",
        details: "Internal tool to store and retrieve versioned configuration and documentation files securely, with search and audit logging."
    },
    {
        name: "Monitoring Automation Scripts",
        details: "Python scripts to automate log collection, parsing, and generating alerts for storage devices and backend services."
    },
    {
        name: "Escalation Dashboard",
        details: "A dashboard to monitor escalations and critical issues in storage systems. Built with Python, Flask, and integrated with cloud services."
    },
    {
        name: "Intervention Portal",
        details: "Portal to manage interventions and support requests, improving team efficiency and tracking resolution times."
    },
    {
        name: "Leave And Attendance Tracker",
        details: "Tracks employee leave and attendance, generates reports, and integrates with HR systems."
    },
    {
        name: "Log Analyzer for Storage Devices",
        details: "Tool to parse and analyze storage device logs, highlighting anomalies and performance issues."
    },
    {
        name: "Storage and Backup Manager",
        details: "System to manage backups, monitor storage usage, and ensure data integrity."
    },
    {
        name: "Monitoring Tool",
        details: "Real-time monitoring tool for server and service health, with alerting and reporting capabilities."
    }
    
];



document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('project-cards');

    projects.forEach((project, index) => {
        const col = document.createElement('div');
        col.className = "col-md-6 col-lg-4 mb-4";

        col.innerHTML = `
        
            <div class="card portfolio-item h-100 shadow mx-auto" data-bs-toggle="modal" data-bs-target="#modal-${index}" style="cursor:pointer; position:relative; overflow:hidden;">
                
                <div class="card-body">
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div class="portfolio-item-caption-content text-center text-black"><i class="fas fa-plus fa-2x"></i></div> 
                    
                        
                    </div>
                    <p class="card-title text-center">${project.name}</p>
                </div>
            </div>
        
    `;
        container.appendChild(col);

        // Create modal
        const modal = document.createElement('div');
        modal.className = "modal fade";
        modal.id = `modal-${index}`;
        modal.tabIndex = -1;
        modal.setAttribute('aria-labelledby', `modalLabel-${index}`);
        modal.setAttribute('aria-hidden', 'true');

        modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content bg-light text-dark">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalLabel-${index}">${project.name}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <p>${project.details}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    `;

        document.body.appendChild(modal);
    });
});