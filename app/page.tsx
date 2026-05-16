export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          光回線 営業管理ツール
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="名前"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="電話番号"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="住所"
            className="w-full border p-3 rounded-lg"
          />

          <button className="w-full bg-blue-500 text-white p-3 rounded-lg">
            判定する
          </button>

          <div className="bg-gray-100 p-4 rounded-lg">
            <p>推定キャリア：docomo系</p>
          </div>
        </div>
      </div>
    </main>
  );
}
