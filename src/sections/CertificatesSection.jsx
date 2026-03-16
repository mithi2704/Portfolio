import SectionHeading from '../components/SectionHeading'
import CertificateGallery from '../components/CertificateGallery'
import { usePortfolio } from '../hooks/usePortfolio'

export default function CertificatesSection() {
  const { certificates } = usePortfolio()

  return (
    <section id="certificates" className="section-shell">
      <SectionHeading
        eyebrow="Certificates"
        title="Credential Gallery"
        description="Interactive credential cards featuring recognitions and challenge outcomes across IEEE and innovation programs."
      />
      <div className="mt-10">
        <CertificateGallery certificates={certificates} />
      </div>
    </section>
  )
}
