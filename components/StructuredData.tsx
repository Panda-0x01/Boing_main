export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Boing",
    "description": "Production-ready API abuse & cybersecurity monitoring platform with multi-layer detection, real-time alerts, and local ML models.",
    "url": "https://boing-main.vercel.app",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Cross-platform",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "Boing Team"
    },
    "softwareVersion": "1.0.0",
    "downloadUrl": "https://github.com/Panda-0x01/Boing_API",
    "codeRepository": "https://github.com/Panda-0x01/Boing_API",
    "programmingLanguage": ["Python", "TypeScript", "JavaScript"],
    "runtimePlatform": ["Docker", "Node.js", "Python"],
    "keywords": "API security, abuse detection, cybersecurity, monitoring, real-time alerts, machine learning, open source",
    "license": "https://opensource.org/licenses/MIT",
    "screenshot": "https://boing-main.vercel.app/boing_logo.jpeg"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}