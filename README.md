# VXR-Coding

## 📋 Mô tả dự án

Dự án này là một API tính tổng từ 1 đến N sử dụng 3 phương pháp khác nhau, được triển khai theo **Strategy Pattern** để đảm bảo code clean và dễ bảo trì.

## 🎯 Tính năng

### Logic tính toán
Dự án cung cấp 3 cách khác nhau để tính tổng từ 1 đến N:

1. **Vòng lặp (Loop)**: Sử dụng vòng lặp `for` để cộng dồn từng số
2. **Công thức toán học (Formula)**: Sử dụng công thức `(n * (n + 1)) / 2`
3. **Đệ quy (Recursive)**: Sử dụng hàm đệ quy để tính tổng

### Kiến trúc code
- **Strategy Pattern**: Cho phép dễ dàng thêm/sửa/xóa các phương pháp tính toán
- **Chia tầng (Layered Architecture)**: Tách biệt rõ ràng giữa Controller, Service, Routes
- **Clean Code**: Code được tổ chức tốt, dễ đọc và bảo trì

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js (version 14 trở lên)
- npm hoặc yarn

### Cài đặt dependencies
```bash
npm install
```

### Chạy ứng dụng
```bash
node app.js
```

Server sẽ chạy tại: `http://localhost:3000`

## 📡 API Endpoints

### Tính tổng từ 1 đến N

**Endpoint:** `GET /api/sum`

**Parameters:**
- `n` (required): Số nguyên dương - giới hạn trên của dãy số
- `method` (required): Phương pháp tính toán (1, 2, hoặc 3)

**Các phương pháp:**
- `method=1`: Sử dụng vòng lặp
- `method=2`: Sử dụng công thức toán học  
- `method=3`: Sử dụng đệ quy

**Ví dụ requests:**

```bash
# Tính tổng từ 1 đến 10 bằng vòng lặp
GET http://localhost:3000/api/sum?n=10&method=1

# Tính tổng từ 1 đến 100 bằng công thức
GET http://localhost:3000/api/sum?n=100&method=2

# Tính tổng từ 1 đến 5 bằng đệ quy
GET http://localhost:3000/api/sum?n=5&method=3
```

**Response thành công:**
```json
{
  "result": 55
}
```

**Response lỗi:**
```json
{
  "error": "Invalid input. Please provide a positive integer for n or a valid method type."
}
```

## 🏗️ Cấu trúc dự án

```
├── app.js                 # Entry point của ứng dụng
├── controllers/           # Controllers xử lý logic nghiệp vụ
│   └── sumController.js   # Controller tính tổng
├── service/              # Services chứa các strategy
│   ├── methodLoopSum.js      # Strategy 1: Vòng lặp
│   ├── methodFormulaSum.js   # Strategy 2: Công thức
│   └── methodRecursiveSum.js # Strategy 3: Đệ quy
├── routes/               # Route definitions
│   └── sumRoutes.js      # Routes cho API tính tổng
├── constants/            # Constants và configurations
│   └── httpCode.js       # HTTP status codes
└── package.json          # Dependencies và scripts
```

## 🎨 Strategy Pattern Implementation

### Cách hoạt động

1. **Strategy Interface**: Tất cả strategies đều có cùng signature `function(n)`
2. **Concrete Strategies**: 3 file service riêng biệt cho từng phương pháp
3. **Context**: `sumController.js` chọn và thực thi strategy dựa trên parameter

```javascript
// Strategy mapping trong sumController.js
const methodSum = {
  1: loopSum,        // Strategy 1: Vòng lặp
  2: formulaSum,     // Strategy 2: Công thức
  3: recursiveSum,   // Strategy 3: Đệ quy
};

// Context sử dụng strategy
const result = methodSum[methodType](n);
```

### Lợi ích của Strategy Pattern

- ✅ **Mở rộng dễ dàng**: Thêm strategy mới không cần sửa code hiện tại
- ✅ **Tách biệt logic**: Mỗi strategy trong file riêng
- ✅ **Dễ test**: Test từng strategy độc lập
- ✅ **Linh hoạt**: Thay đổi strategy runtime

## 🔧 Công nghệ sử dụng

- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **Strategy Pattern**: Design pattern cho tính toán

## 📝 License

ISC License

## 👨‍💻 Tác giả

Vexere Live Coding Project
