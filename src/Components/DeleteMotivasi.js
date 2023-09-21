const DeleteMotivasi = () => {
  const handleDelete = () => {
    const idToDelete = 2224; // Ganti dengan ID yang sesuai
    const apiUrl = `http://www.vigenesia.org/api/dev/DELETEmotivasi/${idToDelete}`;

    fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json", // Sesuaikan dengan jenis konten yang benar jika diperlukan
        // Anda juga bisa menambahkan header lain seperti Authorization jika diperlukan
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal menghapus data"); // Handle kesalahan jika perlu
        }
        return response.json(); // Mengembalikan respons JSON jika ada
      })
      .then((data) => {
        data[0].fetch();
        console.log("Data berhasil dihapus:", data);
        // Tambahkan logika tambahan atau pembaruan antarmuka pengguna jika perlu
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error);
        // Handle kesalahan jika perlu
      });
  };

  return (
    <div className="m-5">
      <input />
      <br />
      <button onClick={handleDelete}>Hapus Data Berdasarkan ID</button>
    </div>
  );
};

export default DeleteMotivasi;
