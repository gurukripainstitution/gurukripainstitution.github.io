import PageHeader from "../../components/page-header";
import Section from "../../components/section";
import { motion } from 'framer-motion'


const documentDeficiencyData = [
    {
        data: [
            "Layout Map",
            "We now confirm that the layout map has been revised and updated to include the total carpet area details."
        ],
        link: "/downloads/layout_map.pdf"
    },
    {
        data: [
            "Registration with sales tax/Services Tax or any other tax authority",
            "We now updated the address of the institute mentioned in the uploaded GST undertaking to match the address provided in the online application portal."
        ],
        link: "/downloads/registration_with_saletax_tax_service_tax.pdf"
    },
    {
        data: [
            "Lease/ Rent agreement/ ownership deed with NOC",
            "We now updated the uploaded rent deed, the address of the institute now match with the address mentioned in the online application portal and the total carpet area has now been correctly specified."
        ],
        link: "/downloads/rent_agreement_noc.pdf"
    },
    {
        data: [
            "Any other Relevant Document",
            "1. We have updated the uploaded video and it now meets the NIELIT O Level norms. The hoarding now displays the complete name and address with pin code of the institute, and the network area/server room, internet connectivity, projector, and drinking water facility are properly shown. All areas, including the printer area, computer lab, fire safety arrangements, etc., are now correctly marked and titled.\n\n2. The undertaking-cum-clarification on the institute letterhead regarding both stamps has been uploaded. Both stamps are affixed on the letterhead, clearly stating that they belong to the institute and the institute is currently using the new stamp.\n\n3. The website www.gurukripainstitution.in has been updated. The institute name and address now match the submitted details, and a confirmation has been submitted on the institute letterhead duly attested by the authorized signatory."
        ],
        link: "/downloads/any_other_relevant_docs.pdf",
        media_url: "https://drive.google.com/file/d/1qzFx9Yd0z6y9zHLfCVS6WqfsvZiZ_GXf/view?usp=sharing"
    },
    {
        data: [
            "Photos of building (front view along with hoarding), classrooms, computer lab, library with seating area, washrooms, reception area, staffroom, etc.",
            "We have updated the uploaded photographs and all deficiencies have been addressed. \n\n1. The hoarding now clearly shows the correct name and address with pin code.\n2. Photographs of office, live classrooms (faculty taking lectures), drinking water facility, and other essential areas have been uploaded.\n3. The photograph of the authorized signatory has been uploaded.\n4. All previously uploaded photographs have been included along with the new ones.\n5. All areas of the institute are now properly labeled and titled."
        ],
        link: "/downloads/institute_photograph.pdf"
    },
    {
        data: [
            "List of books with bill in PDF form (Duly signed by Authority on Letterhead)",
            "We have uploaded the complete and revised list of books along with their corresponding GST bills as per NIELIT O Level norms. All documents are now duly attested by the authorized signatory of the institute with seal and stamp."
        ],
        link: "/downloads/book_detail_with_bill.pdf"
    },
    {
        data: [
            "Hardware Bills",
            "We have updated the hardware bills section and all deficiencies have been addressed. \n\n1. The incorrect GST undertaking has been removed from the hardware bill section.\n2. The hardware undertaking has been re-uploaded on the institute official letterhead following the prescribed format, covering all hardware, computers, and servers. Corresponding GST invoices have also been uploaded.\n3. All submitted documents are now duly attested by the authorized signatory of the institute with seal and stamp."
        ],
        link: "/downloads/hardware_bill_with_undertaking.pdf"
    },
    {
        data: [
            "Affidavit Form",
            "We have updated the uploaded affidavit. The address now matches the details provided in the online application portal, and the affidavit has been duly stamped by the authorized signatory of the institute."
        ],
        link: "/downloads/affidavit.pdf"
    },
    {
        data: [
            "Undertakings",
            "We have updated the uploaded undertakings. Only the O Level undertaking has been uploaded, and it is duly attested by the authorized signatory of the institute with seal and stamp."
        ],
        link: "/downloads/undertaking.pdf"
    }
];


function DocumentsTable({
    heading,
    columns = [],
    rows = [],
    linkLabel = "View PDF"
}) {
    return (
        <div className="py-12 px-8 sm:px-16 bg-surface rounded-xl overflow-x-auto">
            <table className="w-full border border-gray-300">
                <thead>
                    {/* Top Heading */}
                    <tr>
                        <th
                            colSpan={columns.length + 1}
                            className="text-2xl font-semibold text-center p-4 border bg-gray-100"
                        >
                            {heading}
                        </th>
                    </tr>

                    {/* Column Headers */}
                    <tr className="bg-gray-50">
                        {columns.map((col, index) => (
                            <th key={index} className="border p-3 text-left font-medium">
                                {col}
                            </th>
                        ))}
                        <th className="border p-3 text-left font-medium">Document</th>
                    </tr>
                </thead>

                <tbody>
                    {rows.length > 0 ? (
                        rows.map((row, i) => {
                            const { data = [], link = "#", media_url = null } = row
                            return (
                                <tr key={i} className="hover:bg-gray-50">
                                    {data.map((cell, j) => (
                                        <td key={j} className="border p-3">
                                            {cell}
                                        </td>
                                    ))}

                                    {/* View PDF Link */}
                                    <td className="border p-3">
                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            {linkLabel}
                                        </a>
                                        {media_url && (
                                            <>
                                                <br /> <br />
                                                <a
                                                    href={media_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    View Media
                                                    
                                                </a>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            )
                        })
                    ) : (
                        <tr>
                            <td
                                colSpan={columns.length + 1}
                                className="text-center p-4 text-gray-500"
                            >
                                No data available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}



export default function Downloads() {
    return (
        <div className="flex flex-col gap-24">

            <Section>
                <div className="sm:px-8 md:px-24 lg:px-36 text-center flex flex-col items-center gap-8 mt-8">
                    <PageHeader
                        heading={'Download'}
                        highlightedHeading={'Resources'}
                        description={'Access important files, documents, and materials available for download.'}
                    />
                </div>
            </Section>


            <Section>
                <div className="flex gap-4 md:flex-row flex-col">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } }}
                        viewport={{ once: true, amount: 0 }}
                        className="w-full"
                    >
                        <DocumentsTable heading={'Document Deficiency'} columns={['Particulars', 'Deficiency Remarks']} rows={documentDeficiencyData} />
                    </motion.div>
                </div>
            </Section >

        </div >
    )
}