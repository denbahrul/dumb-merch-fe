import Button from "../../../components/ui/button";

export default function ProductDetail() {
  return (
    <div className="justify-between gap-12 md:flex">
      <img
        src="https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        // src="https://images.pexels.com/photos/14444097/pexels-photo-14444097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Product Photo"
        className="m-auto rounded-lg object-cover md:w-[40%]"
      />
      <div className="mt-4 flex flex-col gap-2 md:mt-0 md:w-[60%]">
        <h1 className="text-center text-3xl font-semibold text-red md:text-start md:text-4xl">
          Camera
        </h1>
        <p>Stock : 142</p>
        <p className="py-8 text-sm font-light md:text-base">
          - Wireless Mouse <br />
          - Konektivitas wireless 2.4 GHz <br />
          - Jarak wireless hingga 10 m <br />
          - Plug and Play <br />
          - Baterai tahan hingga 12 bulan <br />
          <br />
          Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse
          yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio
          2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik
          pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x
          baterai AA (hingga 12 bulan hidup baterai). Mendukung sistem operasi
          Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem
          operasi Chrome OS.
        </p>
        <p className="text-end text-xl font-semibold text-red md:text-2xl">
          Rp. 5.000.000
        </p>
        <Button title="Buy" color="red" h="10" />
      </div>
    </div>
  );
}
