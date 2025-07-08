import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generatePDF = async () => {
  try {
    // Create a temporary div with the resume content
    const resumeContent = document.createElement('div');
    resumeContent.innerHTML = `
      <div style="padding: 24px; font-family: Arial, sans-serif; max-width: 850px; color: #222;">
      <h1 style="font-size: 2em; color: #1a365d; margin-bottom: 0;">KARTHICK. S</h1>
      <div style="margin-bottom: 8px;">
        <span>Chennai, India</span> | 
        <span>Mobile: +91-9360390426</span> | 
        <span>Email: karthick.sprp18@gmail.com</span>
      </div>
      <hr style="margin: 12px 0; border: none; border-top: 1px solid #bbb;">
      
      <section style="margin-bottom: 20px;">
        <h2 style="font-size: 1.1em; color: #1a365d; margin-bottom: 4px;">PROFILE SUMMARY</h2>
        <ul style="margin: 0 0 10px 20px; padding: 0;">
        <li>10+ years of professional experience in Web Application Development.</li>
        <li>Expertise in React, Redux, Redux Toolkit, RTK Query, JavaScript, TypeScript, HTML, CSS, SCSS, LESS, Bootstrap, Material UI.</li>
        <li>Strong experience in Agile software development and UI frameworks.</li>
        <li>Skilled in responsive design, component architecture, and state management.</li>
        <li>Quick learner, adaptable to new technologies and tools.</li>
        </ul>
      </section>
      
      <section style="margin-bottom: 20px;">
        <h2 style="font-size: 1.1em; color: #1a365d; margin-bottom: 4px;">TECHNICAL SKILLS</h2>
        <table style="width:100%; font-size: 0.98em;">
        <tr>
          <td style="vertical-align: top; width: 30%;"><strong>Languages</strong></td>
          <td>React JS, Redux, Redux Toolkit, RTK Query, Node.js (Basic), React Native (Basic), JavaScript, SASS, LESS, CSS, HTML</td>
        </tr>
        <tr>
          <td style="vertical-align: top;"><strong>UI Frameworks</strong></td>
          <td>Bootstrap, React Bootstrap, Material UI, Angular Material</td>
        </tr>
        <tr>
          <td style="vertical-align: top;"><strong>Tools & IDEs</strong></td>
          <td>VS Code, Android Studio, Notepad++, Sublime, Atom, JIRA, Git, Swagger</td>
        </tr>
        <tr>
          <td style="vertical-align: top;"><strong>Domains</strong></td>
          <td>Education, Marketing, Job Portal, Media, Global Compliance</td>
        </tr>
        </table>
      </section>
      
      <section style="margin-bottom: 20px;">
        <h2 style="font-size: 1.1em; color: #1a365d; margin-bottom: 4px;">PROFESSIONAL EXPERIENCE</h2>
        <div style="margin-bottom: 10px;">
        <strong>LTIMindtree</strong> | Senior Software Engineer <span style="color: #555;">(Jul 2021 – Present)</span>
        <ul style="margin: 0 0 6px 20px;">
          <li style="margin-bottom:6px"><strong>Global Engagement Management (GEM):</strong> Developed and maintained responsive React.js components, optimized front-end performance, implemented dashboards and reports. <br>
          <em>Tech:</em> React, TypeScript, Redux, RTK Query, Saga, .Net Core, SASS, JEST, RTL, Swagger, Git, Azure DevOps
          </li>
          <li style="margin-bottom:6px"><strong>The Regulatory & Compliance Manager (RCM):</strong> Built UI components, managed state with Redux/RTK Query/Saga, wrote unit tests, peer code reviews, scrum participation.<br>
          <em>Tech:</em> ReactJS, Redux, RTK Query, Saga, TypeScript, Formik, JEST, RTL, .Net Core, Swagger, Azure DevOps
          </li>
          <li><strong>Conde Nast (Contributor Portal & Montrose):</strong> Built reusable React components, bug fixing, enhancements, analysis, and implementation.<br>
          <em>Tech:</em> React JS, Redux Toolkit, Module CSS, Git, MarkLogic
          </li>
        </ul>
        </div>
        <div style="margin-bottom: 10px;">
        <strong>Cognizant (CTS)</strong> | Associate-Project <span style="color: #555;">(Aug 2019 – Jul 2021)</span>
        <ul style="margin: 0 0 6px 20px;">
          <li><strong>Smarthinking:</strong> Migrated PHP to React, developed integration with REST APIs, managed data quality, implemented features and bug fixes.<br>
          <em>Tech:</em> React JS, Redux, JavaScript, React Bootstrap, LESS
          </li>
        </ul>
        </div>
        <div style="margin-bottom: 10px;">
        <strong>Congruent Global</strong> | Software Engineer <span style="color: #555;">(Jan 2019 – Aug 2019)</span>
        <ul style="margin: 0 0 6px 20px;">
          <li><strong>Impact Marketing:</strong> Developed modules using Angular 4, React JS, Bootstrap; responsive web development and business analysis.<br>
          <em>Tech:</em> Angular 4, React JS, Bootstrap, Angular Material
          </li>
        </ul>
        </div>
        <div>
        <strong>Gigame InfoTech Solutions Pvt Ltd</strong> | UI Developer <span style="color: #555;">(Mar 2015 – Jan 2019)</span>
        <ul style="margin: 0 0 6px 20px;">
          <li><strong>GigaMe:</strong> Designed UI layouts, coordinated project activities, migrated legacy UI to React JS with Redux, implemented new screens.<br>
          <em>Tech:</em> JavaScript, JQuery, Bootstrap, React JS, Redux, LESS
          </li>
        </ul>
        </div>
      </section>
      
      <section style="margin-bottom: 20px;">
        <h2 style="font-size: 1.1em; color: #1a365d; margin-bottom: 4px;">EDUCATION</h2>
        <ul style="margin: 0 0 10px 20px;">
        <li><strong>Bachelor of Computer Science and Engineering</strong>, Anna University, Chennai (2009–2013) – 75%</li>
        <li>HSC (+2), Velasamy Chettiar Higher Sec School, Omalur (2007–2009) – 71%</li>
        <li>SSLC, Velasamy Chettiar Higher Sec School, Omalur (2006–2007) – 70%</li>
        </ul>
      </section>
      
      <section style="margin-bottom: 20px;">
        <h2 style="font-size: 1.1em; color: #1a365d; margin-bottom: 4px;">PERSONAL DETAILS</h2>
        <table style="font-size: 0.98em;">
        <tr><td style="width: 140px;">Date of Birth</td><td>: 18 Jan, 1992</td></tr>
        <tr><td>Gender</td><td>: Male</td></tr>
        <tr><td>Email</td><td>: karthick.sprp18@gmail.com</td></tr>
        <tr><td>Languages</td><td>: Tamil, English, Kannada (Speak)</td></tr>
        <tr><td>Marital Status</td><td>: Married</td></tr>
        <tr><td>Nationality</td><td>: Indian</td></tr>
        </table>
      </section>
      
      <section>
        <h2 style="font-size: 1.1em; color: #1a365d; margin-bottom: 4px;">DECLARATION</h2>
        <p style="margin: 0 0 10px 0;">
        I hereby declare that the information furnished above is true to the best of my knowledge and belief.
        </p>
        <div style="display: flex; justify-content: space-between;">
        <span>Place: Chennai</span>
        <span>Signature</span>
        </div>
      </section>
      </div>
    `;

    // Temporarily add to DOM for rendering
    resumeContent.style.position = 'absolute';
    resumeContent.style.left = '-9999px';
    document.body.appendChild(resumeContent);

    // Convert to canvas
    const canvas = await html2canvas(resumeContent, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
    });

    // Remove from DOM
    document.body.removeChild(resumeContent);

    // Create PDF
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = 0;

    pdf.addImage(
      imgData,
      'PNG',
      imgX,
      imgY,
      imgWidth * ratio,
      imgHeight * ratio
    );
    pdf.save('Karthick_Developer_Resume.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};
