function api(url) {
    return {
        get: function () {
            fetch(url).then(res => res.json())
                .then(res => {
                    console.log(res)
                })
        },
        post: function (params) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                ...params
            }).then(res => res.json());
        }
    }
}
// Lấy danh sách khóa học
async function danhsachkhoahoc() {
    let res = await fetch('https://www.cfdtraining.vn/api/danh-sach-khoa-hoc').then(res => res.json())
    console.log(res)
    let html = '';
    for (let i in res) {
        let thubnail = JSON.parse(res[i].thubnail);
        html += `<div class="item col-4">
                <div class="cover">
                    <img src="https://www.cfdtraining.vn/${thubnail.link}" alt="">
                </div>
                <div class="title">${res[i].title}</div>
                <div class="content">${res[i].short_description}</div>
            </div>`
    }
    document.querySelector('.course-list').innerHTML = html;

}
danhsachkhoahoc();
// Đăng nhập
function dangnhap() {
    let username = 'tuannguyen';
    let password = '1234';
    api('https://www.cfdtraining.vn/api/dang-nhap').post({
        body: JSON.stringify({
            username,
            password
        })
    })

}
dangnhap();
// Gửi contact
function contact() {
    let name = 'tuan';
    let email = 'anhtuan@gmail.com';
    let phone = '0903465665';
    let title = 'mentor';
    let content = 'asdasdasd';
    api('https://www.cfdtraining.vn/api/contact').post({
        body: JSON.stringify({
            name,
            email,
            phone,
            title,
            content
        })
    })
}
contact();
// Cập nhật thông tin user
function capnhatthongtin() {
    let name = 'Tuan';
    let phone = '0901234567';
    let email = 'anhtuan1@gmail.com';
    let facebook = 'asdasdasdasdas'
    api('https://www.cfdtraining.vn/api/cap-nhat-thong-tin-ca-nhan').post({
        body: JSON.stringify({
            name,
            email,
            phone,
            facebook
        })
    })
}
capnhatthongtin()

// Đăng ký khóa học
function dangkykhoahoc() {
    let name = 'Tuan';
    let phone = '0901234567';
    let email = 'anhtuan1@gmail.com';
    let facebook = 'asdasdasdasdas';
    api('https://www.cfdtraining.vn/api/dang-ky-khoa-hoc').post({
        body: JSON.stringify({
            name,
            email,
            phone,
            facebook
        })
    })
}
dangkykhoahoc();

// Lấy học viên khóa học
function danhsachhocvien() {
    api('https://www.cfdtraining.vn/api/hoc-vien-khoa-hoc').get()
}
danhsachhocvien();