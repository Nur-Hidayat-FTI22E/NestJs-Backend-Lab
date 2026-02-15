# NestJS Backend Lab

Sebuah tutorial lengkap untuk membangun REST API backend menggunakan NestJS, Prisma, dan PostgreSQL.

## Informasi Praktikan

- **Nama**: NUR HIDAYAT
- **NIM**: 105841115422
- **Repository**: [NestJs-Backend-Lab](https://github.com/Nur-Hidayat-FTI22E/NestJs-Backend-Lab)

## Tentang Proyek

Proyek ini merupakan implementasi aplikasi backend API untuk blog sederhana bernama "Median" (terinspirasi dari Medium). Melalui tutorial ini, Anda akan membangun API yang lengkap dengan fitur CRUD articles, user management, authentication, dan banyak lagi.

### Teknologi yang Digunakan

- **NestJS** (v11.1.13) - Framework backend Node.js
- **TypeScript** (v5.9.3) - Bahasa pemrograman dengan tipe statis
- **Prisma** (v4.15.0) - ORM (Object-Relational Mapping)
- **PostgreSQL** (v13.5) - Database relasional
- **Swagger/OpenAPI** - API Documentation
- **Passport.js** - Authentication library
- **JWT** - JSON Web Token untuk session management
- **Bcrypt** - Password hashing
- **Docker** - Container untuk PostgreSQL

## Daftar Chapter

Proyek ini terbagi menjadi 4 chapter yang dirancang untuk diikuti secara berurutan:

| Chapter | Topik | Status |
|---------|-------|--------|
| 1 | Membangun REST API dengan NestJS dan Prisma | Selesai |
| 2 | Validasi Input & Error Handling | Selesai |
| 3 | Mengelola Data Relasional & User Management | Selesai |
| 4 | Authentication (JWT & Bcrypt) | Selesai |

Buka folder masing-masing chapter untuk melihat dokumentasi lengkap dan checklist pembelajaran.

## Progress Laporan Praktikum

Berikut adalah status implementasi dari setiap chapter:

| Chapter | Deskripsi | Status |
|---------|-----------|--------|
| Chapter 1 | Setup REST API, Docker, Prisma, CRUD Articles, Swagger | Selesai |
| Chapter 2 | Validasi input, error handling, exception filters | Selesai |
| Chapter 3 | User model, relationships, serialization, @Exclude() | Selesai |
| Chapter 4 | JWT authentication, Passport, Auth Guards, bcrypt | Selesai |

**Status keseluruhan**: Semua chapter telah diselesaikan dan siap untuk dipelajari.

## Prasyarat

Pastikan sudah menginstal:

- Node.js v14 atau lebih tinggi
- npm v6 atau lebih tinggi
- Docker dan Docker Compose
- Git

## Cara Menjalankan Proyek

### 1. Clone Repository

```bash
git clone https://github.com/Nur-Hidayat-FTI22E/NestJs-Backend-Lab.git
cd NestJs-Backend-Lab
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Buat file `.env` di root project:

```
DATABASE_URL="postgres://myuser:mypassword@localhost:5432/median-db"
JWT_SECRET="your-secret-key-here"
```

### 4. Jalankan Database dengan Docker

```bash
docker-compose up -d
```

Untuk verifikasi database sudah berjalan:

```bash
docker-compose ps
```

### 5. Jalankan Prisma Migration

```bash
npx prisma migrate dev
```

### 6. Seed Database

```bash
npx prisma db seed
```

Data yang di-seed:
- 3 user dengan password ter-hash
- Beberapa artikel published dan draft untuk setiap user

### 7. Jalankan Development Server

```bash
npm run start:dev
```

Server akan berjalan di `http://localhost:3021`

### 8. Akses API Documentation

Buka Swagger UI di browser: `http://localhost:3021/api`

Di sini Anda dapat melihat semua endpoint API dan mencobanya secara langsung.

## Project Structure

```
src/
├── articles/          # Modul Article (CRUD)
│   ├── dto/
│   ├── entities/
│   ├── articles.controller.ts
│   ├── articles.service.ts
│   └── articles.module.ts
├── users/             # Modul User (CRUD + Password)
│   ├── dto/
│   ├── entities/
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
├── auth/              # Modul Authentication
│   ├── strategies/
│   ├── guards/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   └── auth.module.ts
├── filters/           # Exception filters
├── main.ts            # Entry point aplikasi
└── app.module.ts      # Root module

prisma/
├── schema.prisma      # Database schema
├── seed.ts            # Database seeding
└── migrations/        # Migration files

chapter-1/            # Dokumentasi Chapter 1
chapter-2/            # Dokumentasi Chapter 2
chapter-3/            # Dokumentasi Chapter 3
chapter-4/            # Dokumentasi Chapter 4
```

## API Endpoints

### Articles

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/articles` | Ambil semua artikel yang published |
| GET | `/articles/drafts` | Ambil semua artikel draft |
| GET | `/articles/:id` | Ambil artikel berdasarkan ID |
| POST | `/articles` | Buat artikel baru |
| PATCH | `/articles/:id` | Update artikel |
| DELETE | `/articles/:id` | Hapus artikel |

### Users

| Method | Endpoint | Deskripsi | Auth |
|--------|----------|-----------|------|
| POST | `/users` | Register user baru | - |
| GET | `/users` | Ambil semua users | JWT |
| GET | `/users/:id` | Ambil user berdasarkan ID | JWT |
| PATCH | `/users/:id` | Update user | JWT |
| DELETE | `/users/:id` | Hapus user | JWT |

### Authentication

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| POST | `/auth/login` | Login dan dapatkan JWT token |

## Testing API

### Menggunakan Swagger UI

1. Buka `http://localhost:3021/api`
2. Coba endpoint dari interface Swagger
3. Untuk protected endpoints, klik tombol "Authorize" di bagian atas dan masukkan JWT token

### Menggunakan cURL

```bash
# Login
curl -X POST http://localhost:3021/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"sabin@adams.com","password":"password-sabin"}'

# Gunakan token dari response untuk akses protected endpoint
curl -X GET http://localhost:3021/users \
  -H "Authorization: Bearer <token_dari_login>"
```

## Database Schema

### Model User

Menyimpan informasi user dengan password ter-hash:

- `id` - Primary key
- `name` - Nama user
- `email` - Email unik
- `password` - Password ter-hash dengan bcrypt
- `createdAt` - Tanggal pembuatan
- `updatedAt` - Tanggal update terakhir
- `articles` - Relasi ke articles (one-to-many)

### Model Article

Menyimpan informasi artikel dan relasi ke author:

- `id` - Primary key
- `title` - Judul artikel (unik)
- `description` - Deskripsi singkat
- `body` - Konten artikel
- `published` - Status publikasi
- `createdAt` - Tanggal pembuatan
- `updatedAt` - Tanggal update terakhir
- `author` - Relasi ke user (many-to-one)
- `authorId` - Foreign key ke user

## Troubleshooting

### Database Connection Error

Pastikan PostgreSQL container berjalan:

```bash
docker-compose up -d
docker-compose ps
```

### Port 3021 Sudah Terpakai

Ganti port di `main.ts` dan sesuaikan client Anda.

### Prisma Migration Error

```bash
npx prisma migrate reset
```

Peringatan: Ini akan menghapus semua data!

### JWT Token Invalid

- Pastikan Authorization header format: `Bearer <token>`
- Cek token expiration di [jwt.io](https://jwt.io/)
- Verifikasi `JWT_SECRET` di file `.env`

## Dokumentasi Chapter

Setiap chapter memiliki dokumentasi lengkap dengan penjelasan, kode contoh, dan checklist:

- [Chapter 1 Documentation](./chapter-1/README.md)
- [Chapter 2 Documentation](./chapter-2/README.md)
- [Chapter 3 Documentation](./chapter-3/README.md)
- [Chapter 4 Documentation](./chapter-4/README.md)

## Resources

- [NestJS Documentation](https://docs.nestjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Swagger/OpenAPI](https://swagger.io/)
- [Passport.js](https://www.passportjs.org/)

## Notes

- Password disimpan dengan aman menggunakan bcrypt dengan 10 salt rounds
- Token JWT memiliki masa berlaku 24 jam
- Semua endpoint yang menyangkut data user dilindungi dengan JWT authentication
- Field password tidak ditampilkan dalam API response menggunakan decorator `@Exclude()`
- Database error di-handle dengan filter custom untuk pesan yang lebih informatif

## License

MIT
