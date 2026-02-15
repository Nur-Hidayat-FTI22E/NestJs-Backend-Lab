# 📚 NestJS Backend Lab - Panduan Lengkap REST API# NestJs-Backend-Lab

Seri tutorial lengkap membangun backend REST API untuk aplikasi blog "Median" (klon sederhana Medium) menggunakan **NestJS**, **Prisma**, dan **PostgreSQL**.

## 🎯 Apa yang Akan Anda Bangun?

```
+----------------------------------------------+
|                MEDIAN API                     |
|                                               |
|   Articles   -> CRUD + Relasi ke Author       |
|   Users      -> CRUD + Password Hashing       |
|   Auth       -> Login + JWT Token             |
|   Swagger    -> Dokumentasi API Otomatis      |
|                                               |
|   Tech Stack:                                 |
|   - NestJS      (Framework)                   |
|   - Prisma      (ORM)                         |
|   - PostgreSQL  (Database)                    |
|   - Swagger     (API Docs)                    |
|   - Passport    (Authentication)              |
|   - Docker      (PostgreSQL Container)        |
+----------------------------------------------+
```

## 📖 Daftar Chapter

Ikuti chapters secara berurutan untuk membangun API yang lengkap dan production-ready:

### [Chapter 1: Membangun REST API dengan NestJS dan Prisma](./chapter-1/README.md)

**Tujuan:** Setup proyek NestJS dari nol, koneksi PostgreSQL, Prisma schema, CRUD Articles, Swagger.

**Yang dipelajari:**
- Setup NestJS CLI dan struktur proyek
- Docker + PostgreSQL
- Prisma ORM dan migrations
- CRUD REST API untuk Articles
- Swagger/OpenAPI documentation

**Checklist:** [✅ Lihat detail](./chapter-1/README.md#-laporan-praktikum--chapter-1)

---

### [Chapter 2: Validasi Input & Error Handling](./chapter-2/README.md)

**Tujuan:** Implementasi validasi input, transformasi parameter, dan error handling yang profesional.

**Yang dipelajari:**
- ValidationPipe dengan class-validator decorators
- ParseIntPipe untuk transformasi URL parameters
- NotFoundException untuk error manual
- PrismaClientExceptionFilter untuk database errors (P2002, P2025)
- Whitelist filtering untuk keamanan

**Checklist:** [✅ Lihat detail](./chapter-2/README.md#-laporan-praktikum--chapter-2)

---

### [Chapter 3: Mengelola Data Relasional & User Management](./chapter-3/README.md)

**Tujuan:** Tambah model User, relasi one-to-many dengan Article, CRUD Users, sembunyikan password.

**Yang dipelajari:**
- Prisma relationships (one-to-many)
- CRUD operations untuk Users
- ClassSerializerInterceptor global
- @Exclude() decorator untuk menyembunyikan field sensitif
- Nested object serialization (author di Article)

**Checklist:** [✅ Lihat detail](./chapter-3/README.md#-laporan-praktikum--chapter-3)

---

### [Chapter 4: Authentication (JWT & Bcrypt)](./chapter-4/README.md)

**Tujuan:** Sistem autentikasi JWT, Auth Guard, password hashing dengan bcrypt, Swagger Bearer Auth.

**Yang dipelajari:**
- JWT (JSON Web Token) generation dan validation
- Passport.js + JWT strategy
- Auth Guards untuk melindungi endpoints
- bcrypt untuk password hashing
- Swagger Bearer token integration

**Checklist:** [✅ Lihat detail](./chapter-4/README.md#-laporan-praktikum--chapter-4)

---

## 🔧 Teknologi yang Digunakan

| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| **NestJS** | 11.1.13 | Framework backend Node.js dengan Dependency Injection |
| **TypeScript** | 5.9.3 | Bahasa pemrograman dengan type safety |
| **Prisma** | 4.15.0 | ORM (Object-Relational Mapper) untuk database |
| **PostgreSQL** | 13.5 | Database relasional (via Docker) |
| **Swagger/OpenAPI** | 7.x | Dokumentasi API otomatis dan interaktif |
| **Passport.js** | 0.x | Authentication middleware |
| **JWT** | JSON Web Token | Token-based authentication |
| **Bcrypt** | 5.x | Password hashing algorithm |
| **class-validator** | 0.x | Input validation decorators |
| **class-transformer** | 0.x | Data transformation decorators |

## 🛠️ Prasyarat

Pastikan sudah menginstal:

- ✅ **Node.js** v14+ — [Download](https://nodejs.org/)
- ✅ **npm** v6+ — Biasanya bundled dengan Node.js
- ✅ **Docker** v20+ — [Download](https://www.docker.com/)
- ✅ **VS Code** — [Download](https://code.visualstudio.com/)
- ✅ **Git** — Untuk version control

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/Nur-Hidayat-FTI22E/NestJs-Backend-Lab.git
cd NestJs-Backend-Lab
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Database

Buat file `.env` di root:

```env
DATABASE_URL="postgres://myuser:mypassword@localhost:5432/median-db"
JWT_SECRET="your-secret-key-here"
```

Jalankan PostgreSQL dengan Docker:

```bash
docker-compose up -d
```

### 4. Run Migrations & Seed

```bash
npx prisma migrate dev
npx prisma db seed
```

### 5. Start Development Server

```bash
npm run start:dev
```

Server akan berjalan di: **http://localhost:3021**

### 6. Akses API Documentation

Swagger UI: **http://localhost:3021/api**

## 📋 Project Structure

```
src/
├── articles/              # Article module (CRUD operations)
│   ├── dto/
│   │   ├── create-article.dto.ts
│   │   └── update-article.dto.ts
│   ├── entities/
│   │   └── article.entity.ts
│   ├── articles.controller.ts
│   ├── articles.service.ts
│   └── articles.module.ts
│
├── users/                 # User module (CRUD + Password)
│   ├── dto/
│   │   ├── create-user.dto.ts
│   │   └── update-user.dto.ts
│   ├── entities/
│   │   └── user.entity.ts
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
│
├── auth/                  # Authentication module (JWT + Bcrypt)
│   ├── dto/
│   │   └── login.dto.ts
│   ├── entity/
│   │   └── auth.entity.ts
│   ├── strategies/
│   │   └── jwt.strategy.ts
│   ├── guards/
│   │   └── jwt-auth.guard.ts
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   └── auth.module.ts
│
├── prisma/                # Prisma ORM configuration
│   ├── schema.prisma      # Database schema definition
│   ├── seed.ts            # Database seeding
│   └── migrations/        # Migration files
│
├── filters/               # Exception filters
│   └── prisma-client-exception.filter.ts
│
├── app.module.ts          # Root module
├── main.ts                # Entry point (Swagger, ValidationPipe, GlobalInterceptors)
└── ...

docker-compose.yml        # PostgreSQL container configuration
.env                      # Environment variables
package.json              # Dependencies
tsconfig.json             # TypeScript configuration
```

## 📝 Database Schema

### User Model

```prisma
model User {
  id        Int       @id @default(autoincrement())
  name      String?
  email     String    @unique
  password  String    # Hashed with bcrypt
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  articles  Article[]  # One-to-many relationship
}
```

### Article Model

```prisma
model Article {
  id          Int      @id @default(autoincrement())
  title       String   @unique
  description String?
  body        String
  published   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  author      User?    @relation(fields: [authorId], references: [id])
  authorId    Int?
}
```

## 🔌 API Endpoints

### Articles

| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| POST | `/articles` | Buat artikel baru | ❌ |
| GET | `/articles` | Ambil semua artikel published | ❌ |
| GET | `/articles/drafts` | Ambil semua artikel draft | ❌ |
| GET | `/articles/:id` | Ambil artikel by ID | ❌ |
| PATCH | `/articles/:id` | Update artikel | ❌ |
| DELETE | `/articles/:id` | Hapus artikel | ❌ |

### Users

| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| POST | `/users` | Register user baru | ❌ |
| GET | `/users` | Ambil semua users | ✅ JWT |
| GET | `/users/:id` | Ambil user by ID | ✅ JWT |
| PATCH | `/users/:id` | Update user | ✅ JWT |
| DELETE | `/users/:id` | Hapus user | ✅ JWT |

### Authentication

| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| POST | `/auth/login` | Login & dapatkan JWT token | ❌ |

## ✅ Checklist Pembelajaran

Setiap chapter memiliki checklist lengkap untuk memastikan Anda menyelesaikan semua step dengan benar:

- [x] Chapter 1: Membangun REST API ← [Lihat Checklist](./chapter-1/README.md#-laporan-praktikum--chapter-1)
- [x] Chapter 2: Validasi Input & Error Handling ← [Lihat Checklist](./chapter-2/README.md#-laporan-praktikum--chapter-2)
- [x] Chapter 3: Data Relasional & User Management ← [Lihat Checklist](./chapter-3/README.md#-laporan-praktikum--chapter-3)
- [x] Chapter 4: Authentication (JWT & Bcrypt) ← [Lihat Checklist](./chapter-4/README.md#-laporan-praktikum--chapter-4)

## 🧪 Testing API

### Via Swagger UI

1. Buka http://localhost:3021/api
2. Coba endpoint dari dokumentasi interaktif
3. Untuk protected endpoints, klik "Authorize" dan masukkan JWT token

### Via cURL

```bash
# Login
curl -X POST http://localhost:3021/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"sabin@adams.com","password":"password-sabin"}'

# Ambil token dari response
# Akses protected endpoint
curl -X GET http://localhost:3021/users \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

### Via Postman

1. Import endpoints dari Swagger: http://localhost:3021/api-json
2. Setup environment variables untuk token
3. Testing dapat dilakukan dengan collection

## 📚 Referensi & Dokumentasi

- [NestJS Official Docs](https://docs.nestjs.com/) - Framework documentation
- [Prisma Official Docs](https://www.prisma.io/docs/) - ORM documentation
- [Swagger/OpenAPI](https://swagger.io/) - API documentation standard
- [Passport.js Docs](https://www.passportjs.org/) - Authentication strategies
- [JWT.io](https://jwt.io/) - JWT token debugger
- [PostgreSQL Docs](https://www.postgresql.org/docs/) - Database documentation
- [Docker Docs](https://docs.docker.com/) - Container platform

## 🐛 Troubleshooting

### Port 5432 Already in Use

```bash
# Kill existing PostgreSQL container
docker-compose down
docker-compose up -d
```

### Prisma Client Generation Error

```bash
# Regenerate Prisma Client
npx prisma generate
```

### Password Exposing in Response

- Pastikan `@Exclude()` decorator ada di UserEntity.password
- Pastikan ClassSerializerInterceptor aktif di main.ts
- Pastikan controller return `new UserEntity(...)` bukan plain object

### JWT Token Invalid

- Verify token di JWT.io decoder
- Check expiration time di token payload
- Make sure Authorization header format: `Bearer <token>`

## 📞 Support & Questions

Jika ada pertanyaan atau issue:

1. Check documentation di masing-masing chapter README
2. Lihat troubleshooting section di chapter yang relevan
3. Review source code di folder chapter-1 sampai chapter-4

## 📄 License

MIT License - Silakan gunakan untuk pembelajaran dan project pribadi

## 👨‍💻 Author

**Nur-Hidayat-FTI22E**

Repository: [NestJs-Backend-Lab](https://github.com/Nur-Hidayat-FTI22E/NestJs-Backend-Lab)

---

## 🏁 Status: PRODUCTION READY ✅

Semua fitur telah diimplementasikan dan ditest:
- ✅ REST API dengan CRUD operations
- ✅ Input validation & error handling
- ✅ User management dengan password hashing
- ✅ JWT authentication dengan protected endpoints
- ✅ Database relasi (one-to-many)
- ✅ API documentation (Swagger/OpenAPI)

**Siap untuk deployment!** 🚀
