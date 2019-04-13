// 浮点数根据 IEEE 754 标准存储64 bit 双精度，能够表示 2^64 个数，
// 而浮点数是无穷的，代表有些浮点数必会有精度的损失，
// 0.1，0.2 表示为二进制会有精度的损失。
// 比较时引入一个很小的数值 Number.EPSILON 容忍误差，其值为 2^-52

function eq(a, b) {
    return a - b < Number.EPSILON;
}
