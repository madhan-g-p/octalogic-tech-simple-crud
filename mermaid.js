flowchart TD
    %% Client Layer
    subgraph "Client Layer"
        direction TB
        App["App.js"]:::frontend
        IndexHTML["index.html"]:::frontend
        subgraph "React Pages"
            direction TB
            VehicleType["VehicleType Page"]:::frontend
            ModelName["ModelName Page"]:::frontend
            Wheels["Wheels Page"]:::frontend
            Dates["Dates Page"]:::frontend
            Details["Details Page"]:::frontend
        end
        GlobalState["Global Context"]:::frontend
    end

    %% Server Layer
    subgraph "Server Layer"
        direction TB
        ExpressServer["Express Server"]:::backend
        APIRouter["API Router"]:::backend
        Controller["Vehicle-Booking Controller"]:::backend
        SQLConstants["SQL Constants"]:::backend
        UtilityFunctions["Utility Functions"]:::backend
        subgraph "DB Connection Modules"
            direction TB
            DBJS["db.js"]:::backend
            SetupDB["setupDB.js"]:::backend
        end
        EnvConfig[".env Config"]:::tools
        Postman["Postman Collection"]:::tools
        subgraph "SQL Scripts"
            direction TB
            SchemaScript["schema.sql"]:::tools
            DataScript["data.sql"]:::tools
        end
    end

    %% Database
    Database[(Database)]:::database

    %% Connections
    App -->|"renders SPA"| VehicleType
    VehicleType -->|"navigates"| ModelName
    ModelName -->|"navigates"| Wheels
    Wheels -->|"navigates"| Dates
    Dates -->|"navigates"| Details
    PagesClick---GlobalState
    Details -->|"HTTP Request"| ExpressServer
    ExpressServer -->|"routes to"| APIRouter
    APIRouter -->|"calls"| Controller
    Controller -->|"uses queries from"| SQLConstants
    Controller -->|"calls utilities"| UtilityFunctions
    Controller -->|"connects to"| DBJS
    DBJS -->|"initializes via"| SetupDB
    DBJS -->|"executes queries on"| Database
    Database -->|"returns results to"| DBJS
    DBJS -->|"responses sent back"| Controller
    Controller -->|"JSON response"| ExpressServer
    ExpressServer -->|"HTTP Response"| Details

    EnvConfig -.-> ExpressServer
    Postman -.-> APIRouter

    SchemaScript -.-> Database
    DataScript -.-> Database

    %% Click Events
    click App "https://github.com/madhan-g-p/octalogic-tech-simple-crud/blob/main/front-end/src/App.js"
    click IndexHTML "https://github.com/madhan-g-p/octalogic-tech-simple-crud/blob/main/front-end/public/index.html"
    click VehicleType "https://github.com/madhan-g-p/octalogic-tech-simple-crud/blob/main/front-end/src/pages/vehicleType.js"
    click ModelName "https://github.com/madhan-g-p/octalogic-tech-simple-crud/blob/main/front-end/src/pages/modelName.js"
    click Wheels "https://github.com/madhan-g-p/octalogic-tech-simple-crud/blob/main/front-end/src/pages/wheels.js"
    click Dates "https://github.com/madhan-g-p/octalogic-tech-simple-crud/blob/main/front-end/src/pages/dates.js"
    click Details "https://github.com/madhan-g-p/octalogic-tech-simple-crud/blob/main/front-end/src/pages/details.js"
    click GlobalState "https://github.com/madhan-g-p/octalogic-tech-simple-crud/blob/main/front-end/src/globalState/globalContext.js"
    click ExpressServer "https://github.com/madhan-g-p/octalogic-tech-simple-crud/blob/main/back-end/app.js"
    click APIRouter "https://github.com/madhan-g-p/octalogic-tech-simple-crud/blob/main/back-end/Routes.js"
    click Controller "https://github.com/madhan-g-p/octalogic-tech-simple-crud/blob/main/back-end/v1/vehicle-booking/index.js"
    click SQLConstants "https://github.com/madhan-g-p/octalogic-tech-simple-crud/blob/main/back-end/v1/vehicle-booking/sqlConstants.js"
    click UtilityFunctions "https://github.com/madhan-g-p/octalogic-tech-simple-crud/blob/main/back-end/utilities/utilityFunctions.js"
    click DBJS "https://github.com/madhan-g-p/octalogic-tech-simple-crud/blob/main/back-end/dbConnection/db.js"
    click SetupDB "https://github.com/madhan-g-p/octalogic-tech-simple-crud/blob/main/back-end/dbConnection/setupDB.js"
    click SchemaScript "https://github.com/madhan-g-p/octalogic-tech-simple-crud/blob/main/back-end/SQL_scripts/schema.sql"
    click DataScript "https://github.com/madhan-g-p/octalogic-tech-simple-crud/blob/main/back-end/SQL_scripts/data.sql"
    click EnvConfig "https://github.com/madhan-g-p/octalogic-tech-simple-crud/blob/main/back-end/.env"
    click Postman "https://github.com/madhan-g-p/octalogic-tech-simple-crud/blob/main/back-end/Vehicle-Boooking.postman_collection.json"

    %% Styles
    classDef frontend fill:#ADD8E6,stroke:#333,stroke-width:1px
    classDef backend fill:#90EE90,stroke:#333,stroke-width:1px
    classDef database fill:#FFA500,stroke:#333,stroke-width:1px
    classDef tools fill:#D3D3D3,stroke:#333,stroke-width:1px
