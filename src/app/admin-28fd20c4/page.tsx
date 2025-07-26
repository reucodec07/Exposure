"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import AdminUploader from "./AdminUploader";
import Image from "next/image";

const ADMIN_USERNAME = process.env.NEXT_PUBLIC_ADMIN_USER || "admin";
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASS || "yourStrongPassword";
const ADMIN_KEY = process.env.NEXT_PUBLIC_ADMIN_KEY || "change_this_secret";

export default function Page() {
    // 🟢 1. ALL HOOKS at the very top, before any return
    const searchParams = useSearchParams();
    const [mounted, setMounted] = useState(false);
    const secretKey = searchParams?.get("key");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState("");
    const [gallery, setGallery] = useState<{ public_id: string; secure_url: string }[]>([]);
    const [loadingGallery, setLoadingGallery] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isLoggedIn) fetchGallery();
    }, [isLoggedIn]);

    // 🟢 2. NO RETURNS above this line

    const fetchGallery = async () => {
        setLoadingGallery(true);
        const res = await fetch("/api/gallery-by-tag");
        const data = await res.json();
        setGallery(data.resources || []);
        setLoadingGallery(false);
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            setIsLoggedIn(true);
            setError("");
        } else {
            setError("Invalid credentials.");
        }
    };

    const handleDelete = async (public_id: string) => {
        if (!confirm("Are you sure you want to delete this image?")) return;
        await fetch("/api/delete-image", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ public_id }),
        });
        fetchGallery();
    };

    // 🟢 3. Now you can have conditional rendering:
    if (!mounted) {
        return <div className="text-center text-xl text-gray-500 mt-40">Loading…</div>;
    }

    if (secretKey !== ADMIN_KEY) {
        return <div className="text-center text-xl text-gray-500 mt-40">Not found.</div>;
    }

    return (
        <section id="admin" className="max-w-xl mx-auto mt-20 bg-white rounded-2xl shadow p-8">
            {!isLoggedIn ? (
                <form onSubmit={handleLogin} className="space-y-6">
                    <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
                    <div>
                        <label className="block mb-2 font-medium">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                            required
                            autoComplete="username"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                            required
                            autoComplete="current-password"
                        />
                    </div>
                    {error && <div className="text-red-500 text-sm">{error}</div>}
                    <button
                        type="submit"
                        className="w-full bg-blue-700 text-white font-semibold py-2 rounded hover:bg-blue-800 transition"
                    >
                        Login
                    </button>
                </form>
            ) : (
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-center">Admin Section</h2>
                    <p className="mb-6 text-center text-green-700">Welcome, {ADMIN_USERNAME}!</p>
                    <AdminUploader onUpload={fetchGallery} />
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-3">Gallery Preview</h3>
                        {loadingGallery ? (
                            <div className="text-center text-gray-500">Loading images…</div>
                        ) : (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {gallery.map((img) => (
                                    <div key={img.public_id} className="relative group">
                                        <Image
                                            src={img.secure_url}
                                            alt=""
                                            width={120}
                                            height={90}
                                            className="rounded shadow object-cover"
                                        />
                                        <button
                                            className="absolute top-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded shadow opacity-80 hover:opacity-100 transition"
                                            onClick={() => handleDelete(img.public_id)}
                                            aria-label="Delete image"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <button
                        onClick={() => setIsLoggedIn(false)}
                        className="mt-6 w-full bg-gray-300 text-gray-700 font-medium py-2 rounded hover:bg-gray-400 transition"
                    >
                        Logout
                    </button>
                </div>
            )}
        </section>
    );
}
