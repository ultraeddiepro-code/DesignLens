import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function exportPDF() {
  const report = document.getElementById("report");

  if (!report) {
    alert("Report not found.");
    return;
  }

  const canvas = await html2canvas(report, {
    scale: 2,
    backgroundColor: "#000000",
    useCORS: true,
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const imgWidth = pageWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  let heightLeft = imgHeight;
  let position = 0;

  