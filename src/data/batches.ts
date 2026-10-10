export type BatchGroup = {
  id: string
  label: string
  fullBatchName: string
  subjects: string[]
}

export const batchGroups: BatchGroup[] = [
  {
    id: 'class-6',
    label: 'Class 6',
    fullBatchName: 'Class 6 - All Subjects',
    subjects: ['Bangla', 'English', 'Mathematics', 'Science', 'Bangladesh & Global Studies', 'ICT'],
  },
  {
    id: 'class-7',
    label: 'Class 7',
    fullBatchName: 'Class 7 - All Subjects',
    subjects: ['Bangla', 'English', 'Mathematics', 'Science', 'Bangladesh & Global Studies', 'ICT'],
  },
  {
    id: 'class-8',
    label: 'Class 8',
    fullBatchName: 'Class 8 - All Subjects',
    subjects: ['Bangla', 'English', 'Mathematics', 'Science', 'Bangladesh & Global Studies', 'ICT'],
  },
  {
    id: 'class-9-science',
    label: 'Class 9 (Science Group)',
    fullBatchName: 'Class 9 Science - All Subjects',
    subjects: ['Bangla', 'English', 'General Mathematics', 'Higher Mathematics', 'Physics', 'Chemistry', 'Biology', 'ICT'],
  },
  {
    id: 'class-10-science',
    label: 'Class 10 (Science Group)',
    fullBatchName: 'Class 10 Science - All Subjects',
    subjects: ['Bangla', 'English', 'General Mathematics', 'Higher Mathematics', 'Physics', 'Chemistry', 'Biology', 'ICT'],
  },
  {
    id: 'hsc',
    label: 'HSC (Class 11-12)',
    fullBatchName: 'HSC - All Subjects',
    subjects: ['Bangla', 'English', 'ICT'],
  },
]

// export const batchCount = batchGroups.reduce((total, group) => total + group.subjects.length + 1, 0)
export const batchCount = 20