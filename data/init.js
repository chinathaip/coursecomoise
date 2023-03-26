db = db.getSiblingDB('CourseCompose');
db.Courses.insertMany([
    {
        "course_code": "ITE101",
        "prerequisites": [],
        "reviews": [],
        "course_name": "Information Technology Fundamentals",
        "programs": [
            "IT"
        ]
    },
    {
        "course_code": "ITE102",
        "prerequisites": [
            "MAT101"
        ],
        "reviews": [],
        "course_name": "Discrete Mathematics Structure",
        "programs": [
            "IT"
        ]
    },
    {
        "course_code": "ITE103",
        "prerequisites": [],
        "reviews": [],
        "course_name": "Introduction to Data Structure and Algorithm Analysis",
        "programs": [
            "IT"
        ]
    },
    {
        "course_code": "ITE104",
        "prerequisites": [],
        "reviews": [],
        "course_name": "Computer Organization",
        "programs": [
            "IT"
        ]
    },
    {
        "course_code": "ITE210",
        "prerequisites": [],
        "reviews": [],
        "course_name": "Social and Professional Issue in Information TEchnology",
        "programs": [
            "IT"
        ]
    },
    {
        "course_code": "ITE479",
        "prerequisites": [],
        "reviews": [],
        "course_name": "IT Planning and Project Management",
        "programs": [
            "IT"
        ]
    },
    {
        "course_code": "ITE321",
        "prerequisites": [],
        "reviews": [],
        "course_name": "System Analysis, Design, and Implementation",
        "programs": [
            "IT"
        ]
    },
    {
        "course_code": "ITE331",
        "prerequisites": [],
        "reviews": [],
        "course_name": "Introduction to 3D Modelling and Virtual Reality",
        "programs": [
            "IT"
        ]
    },
    {
        "course_code": "ITE120",
        "prerequisites": [
            "ITE254",
            "ITE221"
        ],
        "reviews": [],
        "course_name": "Web Development 1",
        "programs": [
            "IT"
        ]
    },
    {
        "course_code": "ITE441",
        "prerequisites": [],
        "reviews": [],
        "course_name": "Database Management Systems 1",
        "programs": [
            "IT"
        ]
    },
    {
        "course_code": "ITE224",
        "prerequisites": [
            "ITE102",
            "STA101"
        ],
        "reviews": [],
        "course_name": "Introduction To Data Science",
        "programs": [
            "IT"
        ]
    },
    {
        "course_code": "ITE442",
        "prerequisites": [
            "ITE441"
        ],
        "reviews": [],
        "course_name": "Database Management System 2",
        "programs": [
            "IT"
        ]
    },
    {
        "course_code": "ITE233",
        "prerequisites": [
            "ITE221"
        ],
        "reviews": [],
        "course_name": "Introduction to Internet of Things",
        "programs": [
            "IT"
        ]
    },
    {
        "course_code": "ITE222",
        "prerequisites": [
            "ITE221"
        ],
        "reviews": [],
        "course_name": "Programming 2",
        "programs": [
            "IT"
        ]
    },
    {
        "course_code": "ITE221",
        "prerequisites": [
            "ITE103"
        ],
        "reviews": [],
        "course_name": "Programming 1",
        "programs": [
            "IT"
        ]
    },
    {
        "course_code": "ITE254",
        "prerequisites": [],
        "reviews": [],
        "course_name": "Human Computer Interaction",
        "programs": [
            "IT"
        ]
    },
    {
        "course_code": "ITE231",
        "prerequisites": [],
        "reviews": [],
        "course_name": "System Administration and Maintenance",
        "programs": [
            "IT"
        ]
    },
    {
        "course_code": "ITE420",
        "prerequisites": [
            "ITE475"
        ],
        "reviews": [],
        "course_name": "Information Assurance and Security",
        "programs": [
            "IT"
        ]
    },
    {
        "course_code": "ITE240",
        "prerequisites": [],
        "reviews": [],
        "course_name": "Operating Systems",
        "programs": [
            "IT"
        ]
    },
    {
        "course_code": "ITE475",
        "prerequisites": [],
        "reviews": [],
        "course_name": "Network 1",
        "programs": [
            "IT"
        ]
    }
]);