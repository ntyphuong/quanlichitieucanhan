// inc/main.js
import { auth, provider } from './config.js';
import { signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const btnLogin = document.getElementById('btn-login');
const btnLogout = document.getElementById('btn-logout');
const authSection = document.getElementById('auth-section');
const userInfo = document.getElementById('user-info');

// Xử lý nút Đăng nhập tại chỗ 
if(btnLogin) {
    btnLogin.onclick = async () => {
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Lỗi:", error);
        }
    };
}
// Xử lý nút Đăng xuất tại chỗ 
if(btnLogout) {
    btnLogout.onclick = async () => {
        if(confirm("Bạn muốn đăng xuất khỏi hệ thống?")) {
            await signOut(auth);
            window.location.reload();
        }
    };
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        // Có user -> Hiện thông tin, ẩn nút Login
        authSection.classList.add('d-none');
        userInfo.classList.remove('d-none');
        
        document.getElementById('user-name').innerText = user.displayName;
        document.getElementById('user-email').innerText = user.email;
        document.getElementById('user-avatar').src = user.photoURL;
        
        // Lưu UID vào bộ nhớ trình duyệt để các trang khác dùng dễ hơn
        localStorage.setItem("user_uid", user.uid);
    } else {
        // Không có user -> Hiện nút Login, ẩn thông tin
        authSection.classList.remove('d-none');
        userInfo.classList.add('d-none');
        localStorage.removeItem("user_uid");
    }
});