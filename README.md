# ADA Optimized Website Navigation Menu

WCAG 2.1 & 2.2 compliant navigation template.

This repository provides a starting point for building accessible navigation menus and footers that meet WCAG 2.1 and WCAG 2.2 requirements. It demonstrates use of semantic HTML, ARIA attributes, proper keyboard navigation, and screen reader support.

## Features
- HTML tags, ARIA roles, and labels for accessibility
- Screen reader friendly structure
- Skip-to-main-content link and keyboard navigation
- Guidance for ADA and WCAG best practices
- WCAG 2.0, 2.1, and 2.2 rule references with dedicated `rule-source` link class
- Section outlining WCAG 2.0 compliance for navigation and footer

## Laws and Requirements

### Americans with Disabilities Act (ADA)
The ADA prohibits discrimination on the basis of disability for both public entities (Title II) and places of public accommodation (Title III). The U.S. Department of Justice and courts consistently reference the Web Content Accessibility Guidelines as the yardstick for web accessibility. While no specific version is mandated, conforming to **WCAG 2.0 Level AA** is widely considered the legal minimum, and adopting **WCAG 2.1 or 2.2 Level AA** is viewed as a best practice to reduce litigation risk and serve all users.

### Section 508 of the Rehabilitation Act
Compliance with WCAG 2.0 AA satisfies Section 508. Federal agencies and organizations that receive federal funds must comply with Section 508.

Resources:
- [FCC Section 508](https://www.fcc.gov/general/section-508-rehabilitation-act)
- [Section508.gov](https://www.section508.gov/manage/laws-and-policies/section-508-law/)

### 2018 Revised 508 Standards update to Section 508 of the Rehabilitation Act of 1973
WCAG 2.1 was published in 2018, adding 17 new success criteria (mostly focused on mobile accessibility, low vision, and cognitive disabilities). Section 508 has not been formally updated to require WCAG 2.1.

### State and Local Accessibility Laws
Several U.S. states and municipalities (e.g., California's Unruh Act, Colorado HB21-1110, New York's state policies) require web content to meet WCAG 2.1 Level AA or similar standards. Organizations should review local statutes and ensure compliance in addition to federal requirements.

### WCAG Compliance and Section 508 Reference

| Standard / Requirement | Legally Binding in U.S. | Notes |
|------------------------|-------------------------|-------|
| **Section 508 (2018 Revised Standards)** | **Yes** – requires **WCAG 2.0 AA** | Incorporated by reference. Federal agencies and contractors must meet these criteria. |
| **WCAG 2.0 (2008)** | **Yes (AA only)** via Section 508 | Baseline requirement for compliance. |
| **WCAG 2.1 (2018)** | **No (not codified)** | Adds 17 new success criteria (mobile, low vision, cognitive). Frequently referenced in ADA lawsuits and settlements, and often required in RFPs/procurement. |
| **WCAG 2.2 (2023)** | **No (not codified)** | Adds 9 new success criteria (e.g., Target Size 2.5.8, Focus Not Obscured). Considered best practice for future-proofing. May influence future Section 508 updates and is increasingly cited alongside the ADA. |

## Practical Guidance
- **Minimum legal requirement (federal):** WCAG 2.0 AA
- **Best practice today:** WCAG 2.1 AA
- **Future-proofing / next wave:** WCAG 2.2 AA
- **Lawsuits and DOJ actions:** Often cite WCAG 2.1 or 2.2 even though Section 508 only references 2.0.

## Summary
- If you work with **federal agencies** → you *must* meet WCAG 2.0 AA.
- If you serve the **public sector or private market** → expect WCAG 2.1 AA as the de facto standard.
- If you want to **avoid future rework and legal exposure** → design/build to WCAG 2.2 AA now.

Agencies and contractors are encouraged to follow WCAG 2.1 because it builds on 2.0 and aligns with international best practices. Some procurement or agency-specific requirements already request WCAG 2.1 AA compliance voluntarily.

## Sources
- [WCAG 2.0](https://www.w3.org/TR/WCAG20/)
- [WCAG 2.1](https://www.w3.org/TR/WCAG21/)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [WCAG 2.1 Techniques](https://www.w3.org/WAI/WCAG21/Techniques/)
- [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)

##Resources:
- /resources - collection of html files of sites
- https://www.wcag.com/developers/
- https://www.wcag.com/designers/
- https://www.wcag.com/compliance/section-508/
- https://www.wcag.com/compliance/ada/
- https://www.wcag.com/resource/ux-quick-tips-for-designers/
- https://www.wcag.com/resource/what-is-wcag/
- https://www.wcag.com/resource/ui-quick-tips-for-designers/
- https://www.wcag.com/resource/digital-accessibility-myths-facts/
- https://www.wcag.com/resource/wcag-quick-tips-for-developers/

## Usage
Open `index.html` directly in your browser or host the repository with GitHub Pages to view the accessible navigation example.

