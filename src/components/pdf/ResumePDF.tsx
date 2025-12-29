import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
import {
  recentExperience,
  earlyCareerExperience,
  experienceSummary,
  skills,
  contactInfo
} from '@/lib/data/experience'

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
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
    paddingBottom: 2,
    textTransform: 'uppercase'
  },
  text: {
    marginBottom: 6,
    textAlign: 'justify'
  },
  skillsContainer: {
    flexDirection: 'row',
    marginBottom: 4
  },
  skillsLabel: {
    width: 80,
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
    color: '#0f172a'
  },
  skillsContent: {
    flex: 1,
    color: '#334155'
  },
  jobContainer: {
    marginBottom: 12
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
    alignItems: 'baseline'
  },
  role: {
    fontSize: 11,
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
    marginBottom: 4
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
    marginTop: 2
  },
  techBadge: {
    fontSize: 8,
    backgroundColor: '#f1f5f9',
    padding: '2 6',
    borderRadius: 4,
    color: '#475569'
  },
  earlyCareerRow: {
    flexDirection: 'row',
    marginBottom: 4,
    justifyContent: 'space-between'
  },
  earlyCareerRole: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a',
    width: '40%'
  },
  earlyCareerCompany: {
    fontSize: 10,
    color: '#334155',
    width: '30%'
  },
  earlyCareerPeriod: {
    fontSize: 9,
    color: '#64748b',
    width: '30%',
    textAlign: 'right'
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
          <Text>{contactInfo.email}</Text>
          <Text>|</Text>
          <Text>{contactInfo.phone}</Text>
          <Text>|</Text>
          <Text>{contactInfo.website}</Text>
          <Text>|</Text>
          <Text>{contactInfo.linkedin}</Text>
        </View>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.text}>{experienceSummary}</Text>
      </View>

      {/* Technical Expertise */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Expertise</Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skillsLabel}>Languages:</Text>
          <Text style={styles.skillsContent}>
            {skills.languages.join(', ')}
          </Text>
        </View>
        <View style={styles.skillsContainer}>
          <Text style={styles.skillsLabel}>Frontend:</Text>
          <Text style={styles.skillsContent}>{skills.frontend.join(', ')}</Text>
        </View>
        <View style={styles.skillsContainer}>
          <Text style={styles.skillsLabel}>Backend/Data:</Text>
          <Text style={styles.skillsContent}>{skills.backend.join(', ')}</Text>
        </View>
        <View style={styles.skillsContainer}>
          <Text style={styles.skillsLabel}>Ops/Cloud:</Text>
          <Text style={styles.skillsContent}>{skills.ops.join(', ')}</Text>
        </View>
      </View>

      {/* Professional Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {recentExperience
          .filter((exp) => !exp.excludeFromResume)
          .map((exp) => (
            <View key={exp.id} style={styles.jobContainer}>
              <View style={styles.jobHeader}>
                <Text style={styles.role}>{exp.role}</Text>
                <Text style={styles.period}>{exp.period}</Text>
              </View>
              <Text style={styles.company}>{exp.company}</Text>
              {(exp.resumeDescription ?? exp.description) !== '' && (
                <Text style={styles.description}>
                  {exp.resumeDescription ?? exp.description}
                </Text>
              )}

              {/* Achievements */}
              <View>
                {(exp.resumeAchievements ?? exp.achievements).map(
                  (achievement, i) => (
                    <View key={i} style={styles.bulletPoint}>
                      <Text style={styles.bullet}>•</Text>
                      <Text style={styles.bulletContent}>{achievement}</Text>
                    </View>
                  )
                )}
              </View>

              {/* Technologies */}
              <Text style={styles.technologies}>
                <Text style={{ fontFamily: 'Helvetica-Bold' }}>
                  Environment:{' '}
                </Text>
                {exp.technologies.join(', ')}
              </Text>
            </View>
          ))}
      </View>

      {/* Early Career */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Early Career History</Text>
        {earlyCareerExperience.map((exp) => (
          <View key={exp.id} style={styles.earlyCareerRow}>
            <Text style={styles.earlyCareerRole}>{exp.role}</Text>
            <Text style={styles.earlyCareerCompany}>{exp.company}</Text>
            <Text style={styles.earlyCareerPeriod}>{exp.period}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
)
