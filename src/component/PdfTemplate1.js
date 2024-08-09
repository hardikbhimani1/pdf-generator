import jsPDF from 'jspdf';

export const generatePdfTemplate1 = (data) => {
  const doc = new jsPDF();

  doc.setProperties({
    title: 'Form Data PDF',
  });

  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor('#4a90e2');
  doc.text('Form Data PDF Template', 105, 20, { align: 'center' });

  doc.setLineWidth(0.5);
  doc.setDrawColor('#4a90e2');
  doc.line(20, 25, 190, 25);

  const sectionTop = 40;
  const sectionHeight = 80;
  const sectionLeft = 20;
  const sectionRight = 190;

  doc.setDrawColor('#ddd');
  doc.setFillColor('#f8f8f8');
  doc.rect(sectionLeft, sectionTop, sectionRight - sectionLeft, sectionHeight, 'FD');

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(14);
  doc.setTextColor('#333');

  const labels = [
    { text: 'Name:', y: sectionTop + 10 },
    { text: 'Email:', y: sectionTop + 30 },
    { text: 'Age:', y: sectionTop + 50 },
  ];

  const values = [
    { text: data.name, y: sectionTop + 10 },
    { text: data.email, y: sectionTop + 30 },
    { text: data.age, y: sectionTop + 50 },
  ];

  labels.forEach((label, index) => {
    doc.setFont('helvetica', 'bold');
    doc.text(label.text, sectionLeft + 10, label.y);
  });

  values.forEach((value, index) => {
    doc.setFont('helvetica', 'normal'); 
    doc.text(value.text, sectionLeft + 50, value.y);
  });
  doc.save('form_data_template.pdf');
};
