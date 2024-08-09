import React from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    backgroundColor: '#4a90e2',
    color: 'white',
    padding: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  section: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const Template2Document = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Modern PDF Template</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{data.name}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.value}>{data.age}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{data.email}</Text>
      </View>
    </Page>
  </Document>
);

export const Template2DownloadLink = ({ data }) => (
  <PDFDownloadLink
    document={<Template2Document data={data} />}
    fileName="modern_template.pdf"
    className="download-link"
  >
    {({ loading }) => (loading ? 'Loading document...' : 'Download Template 2')}
  </PDFDownloadLink>
);
    