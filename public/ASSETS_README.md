# Assets Directory

Place the following files in this directory for the portfolio website to function properly:

## Required Files

### Professional Photo
- **Filename**: `james-mcneely-photo.png`
- **Source**: Screenshot_20251222_115355.png (rename to james-mcneely-photo.png)
- **Description**: Professional photo of James working on equipment
- **Recommended size**: 800x800px or similar square aspect ratio
- **Format**: PNG or JPG

### Google IT Support Certificate
- **Filename**: `googleitsupportprofessionalcertificatev2.png`
- **Source**: googleitsupportprofessionalcertificatev2.png
- **Description**: Google IT Support Professional Certificate image
- **Format**: PNG

### Google Cybersecurity Certificate
- **Filename**: `googlecybersecurityprofessionalcertificatev2.png`
- **Source**: googlecybersecurityprofessionalcertificatev2.png
- **Description**: Google Cybersecurity Professional Certificate image
- **Format**: PNG

### IT Service Manager Resume
- **Filename**: `James_McNeely_IT_Service_Manger_Resume_ATS_Optimized.pdf`
- **Source**: James_McNeely_IT_Service_Manger_Resume_ATS_Optimized.pdf
- **Description**: ATS-optimized resume for IT Service Manager positions
- **Format**: PDF

### Cybersecurity Resume
- **Filename**: `James_McNeely_Cybersecurity_Resume_ATS.pdf`
- **Source**: James_McNeely_Cybersecurity_Resume_ATS.pdf
- **Description**: ATS-optimized resume for Cybersecurity Analyst positions
- **Format**: PDF

## Current Status

The website will display placeholder graphics for missing assets. Add the actual files before deploying to production.

## File Locations

If you have the source files in `/mnt/project/`, copy them to this directory:

```bash
# From the project root directory
cp /mnt/project/Screenshot_20251222_115355.png public/james-mcneely-photo.png
cp /mnt/project/googleitsupportprofessionalcertificatev2.png public/
cp /mnt/project/googlecybersecurityprofessionalcertificatev2.png public/
cp /mnt/project/James_McNeely_IT_Service_Manger_Resume_ATS_Optimized.pdf public/
cp /mnt/project/James_McNeely_Cybersecurity_Resume_ATS.pdf public/
```

## Notes

- All assets are referenced with absolute paths starting with `/`
- The Next.js Image component will automatically optimize images
- PDFs will be served as-is for download
- Make sure filenames match exactly (case-sensitive)
