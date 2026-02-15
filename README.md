<!-- Project Header --># 📚 NestJS Backend Lab - Panduan Lengkap REST API# NestJs-Backend-Lab

<div align="center">

Seri tutorial lengkap membangun backend REST API untuk aplikasi blog "Median" (klon sederhana Medium) menggunakan **NestJS**, **Prisma**, dan **PostgreSQL**.

# 📚 NestJS Backend Lab - Panduan Lengkap REST API

## 🎯 Apa yang Akan Anda Bangun?

<a href="https://github.com/Nur-Hidayat-FTI22E/NestJs-Backend-Lab">

  <img src="https://img.shields.io/badge/NestJS-11.1.13-red?style=flat-square&logo=nestjs" alt="NestJS 11.1.13"/>```

</a>+----------------------------------------------+

<a href="https://www.typescriptlang.org/">|                MEDIAN API                     |

  <img src="https://img.shields.io/badge/TypeScript-5.9.3-blue?style=flat-square&logo=typescript" alt="TypeScript 5.9.3"/>|                                               |

</a>|   Articles   -> CRUD + Relasi ke Author       |

<a href="https://www.prisma.io/">|   Users      -> CRUD + Password Hashing       |

  <img src="https://img.shields.io/badge/Prisma-4.15.0-0C344B?style=flat-square&logo=prisma" alt="Prisma 4.15.0"/>|   Auth       -> Login + JWT Token             |

</a>|   Swagger    -> Dokumentasi API Otomatis      |

<a href="https://www.postgresql.org/">|                                               |

  <img src="https://img.shields.io/badge/PostgreSQL-13.5-336791?style=flat-square&logo=postgresql" alt="PostgreSQL 13.5"/>|   Tech Stack:                                 |

</a>|   - NestJS      (Framework)                   |

|   - Prisma      (ORM)                         |

Seri tutorial lengkap membangun backend REST API untuk aplikasi blog **"Median"** menggunakan **NestJS**, **Prisma**, dan **PostgreSQL**.|   - PostgreSQL  (Database)                    |

|   - Swagger     (API Docs)                    |

</div>|   - Passport    (Authentication)              |

|   - Docker      (PostgreSQL Container)        |

---+----------------------------------------------+

```

## 👤 Identitas Praktikan

## 📖 Daftar Chapter

| Atribut | Keterangan |

|---------|-----------|Ikuti chapters secara berurutan untuk membangun API yang lengkap dan production-ready:

| **Nama** | NUR HIDAYAT |

| **NIM** | 105841115422 |### [Chapter 1: Membangun REST API dengan NestJS dan Prisma](./chapter-1/README.md)

| **Repository** | [NestJs-Backend-Lab](https://github.com/Nur-Hidayat-FTI22E/NestJs-Backend-Lab) |

**Tujuan:** Setup proyek NestJS dari nol, koneksi PostgreSQL, Prisma schema, CRUD Articles, Swagger.

---

**Yang dipelajari:**

## 🎯 Apa yang Akan Anda Bangun?- Setup NestJS CLI dan struktur proyek

- Docker + PostgreSQL

```- Prisma ORM dan migrations

+----------------------------------------------+- CRUD REST API untuk Articles

|                MEDIAN API                     |- Swagger/OpenAPI documentation

|                                               |

|   Articles   -> CRUD + Relasi ke Author       |**Checklist:** [✅ Lihat detail](./chapter-1/README.md#-laporan-praktikum--chapter-1)

|   Users      -> CRUD + Password Hashing       |

|   Auth       -> Login + JWT Token             |---

|   Swagger    -> Dokumentasi API Otomatis      |

|                                               |### [Chapter 2: Validasi Input & Error Handling](./chapter-2/README.md)

|   Tech Stack:                                 |

|   - NestJS      (Framework)                   |**Tujuan:** Implementasi validasi input, transformasi parameter, dan error handling yang profesional.

|   - Prisma      (ORM)                         |

|   - PostgreSQL  (Database)                    |**Yang dipelajari:**

|   - Swagger     (API Docs)                    |- ValidationPipe dengan class-validator decorators

|   - Passport    (Authentication)              |- ParseIntPipe untuk transformasi URL parameters

|   - Docker      (PostgreSQL Container)        |- NotFoundException untuk error manual

+----------------------------------------------+- PrismaClientExceptionFilter untuk database errors (P2002, P2025)

```- Whitelist filtering untuk keamanan



---**Checklist:** [✅ Lihat detail](./chapter-2/README.md#-laporan-praktikum--chapter-2)



## 📚 Daftar Chapter---



Ikuti chapters secara berurutan untuk membangun API yang lengkap dan production-ready:### [Chapter 3: Mengelola Data Relasional & User Management](./chapter-3/README.md)



| # | Chapter | Deskripsi | Status |**Tujuan:** Tambah model User, relasi one-to-many dengan Article, CRUD Users, sembunyikan password.

|---|---------|-----------|--------|

| 1 | [Membangun REST API dengan NestJS dan Prisma](./chapter-1/README.md) | Setup NestJS, Docker + PostgreSQL, Prisma schema, CRUD Articles, Swagger | ✅ |**Yang dipelajari:**

| 2 | [Validasi Input & Error Handling](./chapter-2/README.md) | ValidationPipe, class-validator, ParseIntPipe, Exception Filters | ✅ |- Prisma relationships (one-to-many)

| 3 | [Mengelola Data Relasional & User Management](./chapter-3/README.md) | User model, one-to-many relations, CRUD Users, @Exclude(), ClassSerializerInterceptor | ✅ |- CRUD operations untuk Users

| 4 | [Authentication (JWT & Bcrypt)](./chapter-4/README.md) | JWT tokens, Passport.js, Auth Guards, bcrypt password hashing, Swagger Bearer Auth | ✅ |- ClassSerializerInterceptor global

- @Exclude() decorator untuk menyembunyikan field sensitif

---- Nested object serialization (author di Article)



## 📊 Progress Laporan Praktikum**Checklist:** [✅ Lihat detail](./chapter-3/README.md#-laporan-praktikum--chapter-3)



### Status Implementasi Fitur---



| No. | Chapter | Deskripsi | Progress |### [Chapter 4: Authentication (JWT & Bcrypt)](./chapter-4/README.md)

|-----|---------|-----------|----------|

| 1️⃣ | **Chapter 1** | Setup REST API & Database | [x] **SELESAI** |**Tujuan:** Sistem autentikasi JWT, Auth Guard, password hashing dengan bcrypt, Swagger Bearer Auth.

| 2️⃣ | **Chapter 2** | Validasi & Error Handling | [x] **SELESAI** |

| 3️⃣ | **Chapter 3** | Data Relasional & User Management | [x] **SELESAI** |**Yang dipelajari:**

| 4️⃣ | **Chapter 4** | Authentication & Authorization | [x] **SELESAI** |- JWT (JSON Web Token) generation dan validation

- Passport.js + JWT strategy

**Status Keseluruhan:** ✅ **SEMUA CHAPTER SELESAI** (100%)- Auth Guards untuk melindungi endpoints

- bcrypt untuk password hashing

---- Swagger Bearer token integration



## 🔧 Teknologi yang Digunakan**Checklist:** [✅ Lihat detail](./chapter-4/README.md#-laporan-praktikum--chapter-4)



| Teknologi | Versi | Fungsi |---

|-----------|-------|--------|

| **NestJS** | 11.1.13 | Framework backend Node.js dengan Dependency Injection |## 🔧 Teknologi yang Digunakan

| **TypeScript** | 5.9.3 | Bahasa pemrograman dengan type safety |

| **Prisma** | 4.15.0 | ORM (Object-Relational Mapper) untuk database || Teknologi | Versi | Fungsi |

| **PostgreSQL** | 13.5 | Database relasional (via Docker) ||-----------|-------|--------|

| **Swagger/OpenAPI** | 7.x | Dokumentasi API otomatis dan interaktif || **NestJS** | 11.1.13 | Framework backend Node.js dengan Dependency Injection |

| **Passport.js** | 0.x | Authentication middleware || **TypeScript** | 5.9.3 | Bahasa pemrograman dengan type safety |

| **JWT** | JSON Web Token | Token-based authentication || **Prisma** | 4.15.0 | ORM (Object-Relational Mapper) untuk database |

| **Bcrypt** | 5.x | Password hashing algorithm || **PostgreSQL** | 13.5 | Database relasional (via Docker) |

| **class-validator** | 0.x | Input validation decorators || **Swagger/OpenAPI** | 7.x | Dokumentasi API otomatis dan interaktif |

| **class-transformer** | 0.x | Data transformation decorators || **Passport.js** | 0.x | Authentication middleware |

| **JWT** | JSON Web Token | Token-based authentication |

---| **Bcrypt** | 5.x | Password hashing algorithm |

| **class-validator** | 0.x | Input validation decorators |

## 🛠️ Prasyarat| **class-transformer** | 0.x | Data transformation decorators |



Pastikan sudah menginstal:## 🛠️ Prasyarat



- ✅ **Node.js** v14+ — [Download](https://nodejs.org/)Pastikan sudah menginstal:

- ✅ **npm** v6+ — Biasanya bundled dengan Node.js

- ✅ **Docker** v20+ — [Download](https://www.docker.com/)- ✅ **Node.js** v14+ — [Download](https://nodejs.org/)

- ✅ **VS Code** — [Download](https://code.visualstudio.com/)- ✅ **npm** v6+ — Biasanya bundled dengan Node.js

- ✅ **Git** — Untuk version control- ✅ **Docker** v20+ — [Download](https://www.docker.com/)

- ✅ **VS Code** — [Download](https://code.visualstudio.com/)

---- ✅ **Git** — Untuk version control



## 🚀 Quick Start - Cara Menjalankan Proyek## 🚀 Quick Start



### Step 1: Clone Repository### 1. Clone Repository



```bash```bash

git clone https://github.com/Nur-Hidayat-FTI22E/NestJs-Backend-Lab.gitgit clone https://github.com/Nur-Hidayat-FTI22E/NestJs-Backend-Lab.git

cd NestJs-Backend-Labcd NestJs-Backend-Lab

``````



### Step 2: Install Dependencies### 2. Install Dependencies



```bash```bash

npm installnpm install

``````



### Step 3: Setup Environment Variables### 3. Setup Database



Buat file `.env` di root project:Buat file `.env` di root:



```env```env

DATABASE_URL="postgres://myuser:mypassword@localhost:5432/median-db"DATABASE_URL="postgres://myuser:mypassword@localhost:5432/median-db"

JWT_SECRET="your-secret-key-here"JWT_SECRET="your-secret-key-here"

``````



### Step 4: Jalankan Docker Compose (PostgreSQL)Jalankan PostgreSQL dengan Docker:



```bash```bash

docker-compose up -ddocker-compose up -d

``````



**Periksa status container:**### 4. Run Migrations & Seed

```bash

docker-compose ps```bash

```npx prisma migrate dev

npx prisma db seed

### Step 5: Prisma Migration```



Jalankan migration untuk membuat schema database:### 5. Start Development Server



```bash```bash

npx prisma migrate devnpm run start:dev

``````



### Step 6: Seed DatabaseServer akan berjalan di: **http://localhost:3021**



Isi database dengan data sample:### 6. Akses API Documentation



```bashSwagger UI: **http://localhost:3021/api**

npx prisma db seed

```## 📋 Project Structure



Sample data yang dibuat:```

- **Users**: Sabin Adams, Alexie Mayer, dll (dengan password ter-hash)src/

- **Articles**: Beberapa artikel published dan draft dari masing-masing user├── articles/              # Article module (CRUD operations)

│   ├── dto/

### Step 7: Start Development Server│   │   ├── create-article.dto.ts

│   │   └── update-article.dto.ts

```bash│   ├── entities/

npm run start:dev│   │   └── article.entity.ts

```│   ├── articles.controller.ts

│   ├── articles.service.ts

**Output:**│   └── articles.module.ts

```│

[NestFactory] Starting Nest application...├── users/                 # User module (CRUD + Password)

[InstanceLoader] AppModule dependencies initialized +500ms│   ├── dto/

...│   │   ├── create-user.dto.ts

Application running on: http://localhost:3021│   │   └── update-user.dto.ts

```│   ├── entities/

│   │   └── user.entity.ts

### Step 8: Akses API Documentation│   ├── users.controller.ts

│   ├── users.service.ts

Buka di browser: **http://localhost:3021/api**│   └── users.module.ts

│

Anda akan melihat Swagger UI dengan semua endpoint API yang tersedia.├── auth/                  # Authentication module (JWT + Bcrypt)

│   ├── dto/

---│   │   └── login.dto.ts

│   ├── entity/

## 📋 Project Structure│   │   └── auth.entity.ts

│   ├── strategies/

```│   │   └── jwt.strategy.ts

NestJs-Backend-Lab/│   ├── guards/

├── src/│   │   └── jwt-auth.guard.ts

│   ├── articles/              # Article module (CRUD operations)│   ├── auth.controller.ts

│   │   ├── dto/│   ├── auth.service.ts

│   │   │   ├── create-article.dto.ts│   └── auth.module.ts

│   │   │   └── update-article.dto.ts│

│   │   ├── entities/├── prisma/                # Prisma ORM configuration

│   │   │   └── article.entity.ts│   ├── schema.prisma      # Database schema definition

│   │   ├── articles.controller.ts│   ├── seed.ts            # Database seeding

│   │   ├── articles.service.ts│   └── migrations/        # Migration files

│   │   └── articles.module.ts│

│   │├── filters/               # Exception filters

│   ├── users/                 # User module (CRUD + Password)│   └── prisma-client-exception.filter.ts

│   │   ├── dto/│

│   │   │   ├── create-user.dto.ts├── app.module.ts          # Root module

│   │   │   └── update-user.dto.ts├── main.ts                # Entry point (Swagger, ValidationPipe, GlobalInterceptors)

│   │   ├── entities/└── ...

│   │   │   └── user.entity.ts

│   │   ├── users.controller.tsdocker-compose.yml        # PostgreSQL container configuration

│   │   ├── users.service.ts.env                      # Environment variables

│   │   └── users.module.tspackage.json              # Dependencies

│   │tsconfig.json             # TypeScript configuration

│   ├── auth/                  # Authentication module (JWT + Bcrypt)```

│   │   ├── dto/

│   │   │   └── login.dto.ts## 📝 Database Schema

│   │   ├── entities/

│   │   │   └── auth.entity.ts### User Model

│   │   ├── strategies/

│   │   │   └── jwt.strategy.ts```prisma

│   │   ├── guards/model User {

│   │   │   └── jwt-auth.guard.ts  id        Int       @id @default(autoincrement())

│   │   ├── auth.controller.ts  name      String?

│   │   ├── auth.service.ts  email     String    @unique

│   │   └── auth.module.ts  password  String    # Hashed with bcrypt

│   │  createdAt DateTime  @default(now())

│   ├── filters/               # Exception filters  updatedAt DateTime  @updatedAt

│   │   └── prisma-client-exception.filter.ts  articles  Article[]  # One-to-many relationship

│   │}

│   ├── app.module.ts          # Root module```

│   ├── main.ts                # Entry point

│   └── ...### Article Model

│

├── prisma/```prisma

│   ├── schema.prisma          # Database schema definitionmodel Article {

│   ├── seed.ts                # Database seeding  id          Int      @id @default(autoincrement())

│   └── migrations/            # Migration files  title       String   @unique

│  description String?

├── chapter-1/                 # Documentation Chapter 1  body        String

│   └── README.md  published   Boolean  @default(false)

│  createdAt   DateTime @default(now())

├── chapter-2/                 # Documentation Chapter 2  updatedAt   DateTime @updatedAt

│   └── README.md  author      User?    @relation(fields: [authorId], references: [id])

│  authorId    Int?

├── chapter-3/                 # Documentation Chapter 3}

│   └── README.md```

│

├── chapter-4/                 # Documentation Chapter 4## 🔌 API Endpoints

│   └── README.md

│### Articles

├── docker-compose.yml         # PostgreSQL container configuration

├── .env                       # Environment variables (buat sendiri)| Method | Endpoint | Deskripsi | Auth |

├── .env.example               # Template environment variables|--------|----------|-----------|------|

├── .gitignore                 # Git ignore file| POST | `/articles` | Buat artikel baru | ❌ |

├── package.json               # Dependencies| GET | `/articles` | Ambil semua artikel published | ❌ |

├── tsconfig.json              # TypeScript configuration| GET | `/articles/drafts` | Ambil semua artikel draft | ❌ |

└── README.md                  # Dokumentasi utama (file ini)| GET | `/articles/:id` | Ambil artikel by ID | ❌ |

```| PATCH | `/articles/:id` | Update artikel | ❌ |

| DELETE | `/articles/:id` | Hapus artikel | ❌ |

---

### Users

## 📝 Database Schema

| Method | Endpoint | Deskripsi | Auth |

### User Model|--------|----------|-----------|------|

| POST | `/users` | Register user baru | ❌ |

```prisma| GET | `/users` | Ambil semua users | ✅ JWT |

model User {| GET | `/users/:id` | Ambil user by ID | ✅ JWT |

  id        Int       @id @default(autoincrement())| PATCH | `/users/:id` | Update user | ✅ JWT |

  name      String?| DELETE | `/users/:id` | Hapus user | ✅ JWT |

  email     String    @unique

  password  String    # Hashed with bcrypt### Authentication

  createdAt DateTime  @default(now())

  updatedAt DateTime  @updatedAt| Method | Endpoint | Deskripsi | Auth |

  articles  Article[]  # One-to-many relationship|--------|----------|-----------|------|

}| POST | `/auth/login` | Login & dapatkan JWT token | ❌ |

```

## ✅ Checklist Pembelajaran

### Article Model

Setiap chapter memiliki checklist lengkap untuk memastikan Anda menyelesaikan semua step dengan benar:

```prisma

model Article {- [x] Chapter 1: Membangun REST API ← [Lihat Checklist](./chapter-1/README.md#-laporan-praktikum--chapter-1)

  id          Int      @id @default(autoincrement())- [x] Chapter 2: Validasi Input & Error Handling ← [Lihat Checklist](./chapter-2/README.md#-laporan-praktikum--chapter-2)

  title       String   @unique- [x] Chapter 3: Data Relasional & User Management ← [Lihat Checklist](./chapter-3/README.md#-laporan-praktikum--chapter-3)

  description String?- [x] Chapter 4: Authentication (JWT & Bcrypt) ← [Lihat Checklist](./chapter-4/README.md#-laporan-praktikum--chapter-4)

  body        String

  published   Boolean  @default(false)## 🧪 Testing API

  createdAt   DateTime @default(now())

  updatedAt   DateTime @updatedAt### Via Swagger UI

  author      User?    @relation(fields: [authorId], references: [id])

  authorId    Int?1. Buka http://localhost:3021/api

}2. Coba endpoint dari dokumentasi interaktif

```3. Untuk protected endpoints, klik "Authorize" dan masukkan JWT token



---### Via cURL



## 🔌 API Endpoints```bash

# Login

### Articlescurl -X POST http://localhost:3021/auth/login \

  -H "Content-Type: application/json" \

| Method | Endpoint | Deskripsi | Auth |  -d '{"email":"sabin@adams.com","password":"password-sabin"}'

|--------|----------|-----------|------|

| POST | `/articles` | Buat artikel baru | ❌ |# Ambil token dari response

| GET | `/articles` | Ambil semua artikel published | ❌ |# Akses protected endpoint

| GET | `/articles/drafts` | Ambil semua artikel draft | ❌ |curl -X GET http://localhost:3021/users \

| GET | `/articles/:id` | Ambil artikel by ID | ❌ |  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

| PATCH | `/articles/:id` | Update artikel | ❌ |```

| DELETE | `/articles/:id` | Hapus artikel | ❌ |

### Via Postman

### Users

1. Import endpoints dari Swagger: http://localhost:3021/api-json

| Method | Endpoint | Deskripsi | Auth |2. Setup environment variables untuk token

|--------|----------|-----------|------|3. Testing dapat dilakukan dengan collection

| POST | `/users` | Register user baru | ❌ |

| GET | `/users` | Ambil semua users | ✅ JWT |## 📚 Referensi & Dokumentasi

| GET | `/users/:id` | Ambil user by ID | ✅ JWT |

| PATCH | `/users/:id` | Update user | ✅ JWT |- [NestJS Official Docs](https://docs.nestjs.com/) - Framework documentation

| DELETE | `/users/:id` | Hapus user | ✅ JWT |- [Prisma Official Docs](https://www.prisma.io/docs/) - ORM documentation

- [Swagger/OpenAPI](https://swagger.io/) - API documentation standard

### Authentication- [Passport.js Docs](https://www.passportjs.org/) - Authentication strategies

- [JWT.io](https://jwt.io/) - JWT token debugger

| Method | Endpoint | Deskripsi | Auth |- [PostgreSQL Docs](https://www.postgresql.org/docs/) - Database documentation

|--------|----------|-----------|------|- [Docker Docs](https://docs.docker.com/) - Container platform

| POST | `/auth/login` | Login & dapatkan JWT token | ❌ |

## 🐛 Troubleshooting

---

### Port 5432 Already in Use

## 🧪 Testing API

```bash

### Via Swagger UI (Recommended)# Kill existing PostgreSQL container

docker-compose down

1. Buka http://localhost:3021/apidocker-compose up -d

2. Coba endpoint dari dokumentasi interaktif```

3. Untuk protected endpoints:

   - Klik tombol **"Authorize"** di bagian atas### Prisma Client Generation Error

   - Login terlebih dahulu dengan `/auth/login`

   - Copy token dari response```bash

   - Paste ke field Authorization dengan format: `Bearer <token>`# Regenerate Prisma Client

npx prisma generate

### Via cURL```



```bash### Password Exposing in Response

# 1. Login untuk mendapatkan token

curl -X POST http://localhost:3021/auth/login \- Pastikan `@Exclude()` decorator ada di UserEntity.password

  -H "Content-Type: application/json" \- Pastikan ClassSerializerInterceptor aktif di main.ts

  -d '{"email":"sabin@adams.com","password":"password-sabin"}'- Pastikan controller return `new UserEntity(...)` bukan plain object



# Response berisi JWT token### JWT Token Invalid

# Salin token dari response

- Verify token di JWT.io decoder

# 2. Akses protected endpoint dengan token- Check expiration time di token payload

curl -X GET http://localhost:3021/users \- Make sure Authorization header format: `Bearer <token>`

  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

```## 📞 Support & Questions



### Via PostmanJika ada pertanyaan atau issue:



1. Import endpoints dari Swagger: http://localhost:3021/api-json1. Check documentation di masing-masing chapter README

2. Setup environment variables untuk token2. Lihat troubleshooting section di chapter yang relevan

3. Testing dapat dilakukan dengan collection3. Review source code di folder chapter-1 sampai chapter-4



---## 📄 License



## 📚 Setiap Chapter MencakupMIT License - Silakan gunakan untuk pembelajaran dan project pribadi



### ✅ Chapter 1: Membangun REST API dengan NestJS dan Prisma## 👨‍💻 Author

- [Buka Documentation →](./chapter-1/README.md)

- Setup NestJS dari scratch**Nur-Hidayat-FTI22E**

- Docker & PostgreSQL configuration

- Prisma ORM & database schemaRepository: [NestJs-Backend-Lab](https://github.com/Nur-Hidayat-FTI22E/NestJs-Backend-Lab)

- CRUD operations untuk Articles

- Swagger/OpenAPI documentation---



### ✅ Chapter 2: Validasi Input & Error Handling## 🏁 Status: PRODUCTION READY ✅

- [Buka Documentation →](./chapter-2/README.md)

- GlobalValidationPipe dengan class-validatorSemua fitur telah diimplementasikan dan ditest:

- Input transformasi dengan ParseIntPipe- ✅ REST API dengan CRUD operations

- Manual error handling (NotFoundException)- ✅ Input validation & error handling

- Database error handling (PrismaClientExceptionFilter)- ✅ User management dengan password hashing

- Security best practices- ✅ JWT authentication dengan protected endpoints

- ✅ Database relasi (one-to-many)

### ✅ Chapter 3: Mengelola Data Relasional & User Management- ✅ API documentation (Swagger/OpenAPI)

- [Buka Documentation →](./chapter-3/README.md)

- Prisma relationships (one-to-many)**Siap untuk deployment!** 🚀

- User model dengan password
- Complete CRUD untuk Users
- ClassSerializerInterceptor global
- @Exclude() decorator untuk field sensitif
- Nested object serialization

### ✅ Chapter 4: Authentication (JWT & Bcrypt)
- [Buka Documentation →](./chapter-4/README.md)
- JWT token generation & validation
- Passport.js + JWT strategy
- Auth Guards untuk endpoint protection
- bcrypt password hashing (10 rounds)
- Swagger Bearer token integration
- Complete authentication flow

---

## 🐛 Troubleshooting

### ❌ Port 5432 Already in Use

```bash
# Verify port status
lsof -i :5432

# Kill existing process or stop container
docker-compose down
docker-compose up -d
```

### ❌ Prisma Client Generation Error

```bash
# Regenerate Prisma Client
npx prisma generate
```

### ❌ Password Exposing in Response

**Solusi:**
- Pastikan `@Exclude()` decorator ada di `UserEntity.password`
- Pastikan `ClassSerializerInterceptor` aktif di `main.ts`
- Pastikan controller return `new UserEntity(...)` bukan plain object
- Check service layer untuk `stripAuthorPassword()` helper

### ❌ JWT Token Invalid

**Troubleshooting:**
- Verify token di [JWT.io](https://jwt.io/) decoder
- Check expiration time di token payload
- Make sure Authorization header format: `Bearer <token>` (exact spacing)
- Verify `JWT_SECRET` di `.env` match dengan strategy config

### ❌ Migration Conflict

```bash
# Reset database (HATI-HATI: akan menghapus semua data!)
npx prisma migrate reset

# Atau jalankan specific migration
npx prisma migrate deploy
```

---

## 📚 Referensi & Dokumentasi

- 📖 [NestJS Official Docs](https://docs.nestjs.com/) - Framework documentation
- 🗄️ [Prisma Official Docs](https://www.prisma.io/docs/) - ORM documentation
- 📊 [Swagger/OpenAPI](https://swagger.io/) - API documentation standard
- 🔐 [Passport.js Docs](https://www.passportjs.org/) - Authentication strategies
- 🔑 [JWT.io](https://jwt.io/) - JWT token debugger & info
- 🐘 [PostgreSQL Docs](https://www.postgresql.org/docs/) - Database documentation
- 🐳 [Docker Docs](https://docs.docker.com/) - Container platform

---

## 📞 Support & Questions

Jika ada pertanyaan atau issue:

1. ✅ Check documentation di masing-masing chapter README
2. ✅ Lihat troubleshooting section di chapter yang relevan
3. ✅ Review source code di folder `chapter-1` sampai `chapter-4`
4. ✅ Buka issue di GitHub repository

---

## 📄 License

MIT License - Silakan gunakan untuk pembelajaran dan project pribadi

---

## 👨‍💻 Author

| Info | Detail |
|------|--------|
| **Nama** | Nur-Hidayat-FTI22E |
| **NIM** | 105841115422 |
| **Repository** | [NestJs-Backend-Lab](https://github.com/Nur-Hidayat-FTI22E/NestJs-Backend-Lab) |
| **GitHub** | https://github.com/Nur-Hidayat-FTI22E |

---

## 🏁 Status: PRODUCTION READY ✅

Semua fitur telah diimplementasikan dan ditest:

- ✅ REST API dengan CRUD operations lengkap
- ✅ Input validation & error handling profesional
- ✅ User management dengan password hashing (bcrypt)
- ✅ JWT authentication dengan protected endpoints
- ✅ Database relasi (one-to-many) yang proper
- ✅ API documentation (Swagger/OpenAPI) interaktif
- ✅ Exception filtering & global interceptors
- ✅ Data serialization dengan @Exclude() decorator

**Siap untuk deployment!** 🚀

Untuk memulai, ikuti [Quick Start - Cara Menjalankan Proyek](#-quick-start---cara-menjalankan-proyek) di atas.

---

<div align="center">

**Made with ❤️ for learning NestJS, Prisma & PostgreSQL**

Last Updated: February 15, 2026

</div>
