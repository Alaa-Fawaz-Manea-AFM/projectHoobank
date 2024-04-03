import { clients } from "@/constants";
import Image from "next/image";

const Clients = () => (
  <section className="my-4 flex justify-center items-center">
    <div className="flex-wrap w-full flex justify-center items-center">
      {clients.map((client) => (
        <div
          key={client.id}
          className="flex justify-center items-center flex-1 sm:w-[192px] min-w-[120px] relative"
        >
          <Image
            src={client.logo.src}
            fill
            alt="client"
            className="object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
