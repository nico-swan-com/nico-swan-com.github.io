import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
import { experienceData, experienceSummary } from '@/lib/data/experience'

// Register fonts if needed, but Helvetica is standard
// Font.register({ family: 'Inter', src: '...' })

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: '#334155', // secondary
    lineHeight: 1.5
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    paddingBottom: 10
  },
  name: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a', // primary
    marginBottom: 4
  },
  title: {
    fontSize: 14,
    color: '#f97316', // accent
    marginBottom: 4
  },
  contact: {
    fontSize: 10,
    color: '#64748b', // muted-foreground
    flexDirection: 'row',
    gap: 10
  },
  section: {
    marginBottom: 15
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
    paddingBottom: 2
  },
  text: {
    marginBottom: 6,
    textAlign: 'justify'
  },
  jobContainer: {
    marginBottom: 15
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
    alignItems: 'baseline'
  },
  role: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a'
  },
  period: {
    fontSize: 9,
    color: '#64748b'
  },
  company: {
    fontSize: 10,
    fontFamily: 'Helvetica-Oblique',
    color: '#f97316',
    marginBottom: 4
  },
  description: {
    marginBottom: 6
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 2,
    paddingLeft: 10
  },
  bullet: {
    width: 10,
    fontSize: 10
  },
  bulletContent: {
    flex: 1
  },
  technologies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 4
  },
  techBadge: {
    fontSize: 8,
    backgroundColor: '#f1f5f9',
    padding: '2 6',
    borderRadius: 4,
    color: '#475569'
  }
})

export const ResumePDF = () => (
  <Document>
    <Page size='A4' style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Nico Swan</Text>
        <Text style={styles.title}>Senior Full Stack Software Engineer</Text>
        <View style={styles.contact}>
          <Text>nicoswan.com</Text>
          <Text>|</Text>
          <Text>linkedin.com/in/nicoswan</Text>
        </View>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.text}>{experienceSummary}</Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {experienceData.map((exp) => (
          <View key={exp.id} style={styles.jobContainer}>
            <View style={styles.jobHeader}>
              <Text style={styles.role}>{exp.role}</Text>
              <Text style={styles.period}>{exp.period}</Text>
            </View>
            <Text style={styles.company}>{exp.company}</Text>
            <Text style={styles.description}>{exp.description}</Text>

            {/* Achievements */}
            <View>
              {exp.achievements.map((achievement, i) => (
                <View key={i} style={styles.bulletPoint}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletContent}>{achievement}</Text>
                </View>
              ))}
            </View>

            {/* Technologies */}
            <View style={styles.technologies}>
              {exp.technologies.map((tech, i) => (
                <Text key={i} style={styles.techBadge}>
                  {tech}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </View>
    </Page>
  </Document>
)
