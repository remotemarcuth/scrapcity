import { ParsingModel } from "xcrap/parsing"

import pageMedatadaParsingModel from "./page-metadata.pmodel"

const deetlistHomePageParsingModel = {
    meetadata: {
        query: "head",
        model: pageMedatadaParsingModel,
    }
} satisfies ParsingModel

export default deetlistHomePageParsingModel