import montaDoc from "@/utils/montaDoc";
import { saveAs } from "file-saver";
import { Packer } from "docx";

export default function Home() {
  const geraDoc = async () => {
    const doc = await montaDoc();
  
    Packer.toBlob(doc).then(blob => {
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={geraDoc}>
        RELATORIO
      </button>
    </main>
  );
}
