import "@citizenfx/client";
import { appEvent } from "./modules/mdt.nui";

emitNet("LMDT:Server:initClient");
onNet("QBCore:Client:OnPlayerLoaded", () => {
    emitNet("LMDT:Server:initClient");
});

onNet("LMDT:Client:InitClient", (authToken: any) => {
    new MDT(authToken);
});

export class MDT {
    private qbcore: any = null;
    private isFocused = false;
    private objects: any = null;
    public isCop = false;
    public mdtCmds: any = null;

    constructor(authToken: string) {
        if (authToken !== "" || authToken !== null) {
            this.qbcore = exports["qb-core"].GetCoreObject();
            this.regEvents();
            if (!this.qbcore === null) {
                throw new Error("Failed to get qb-core object");
            }
        } else {
            throw new Error("No auth token provided");
        }
    }

    private regEvents() {
        onNet("LMDT:Client:openMDT", () => {
            appEvent("mdt", "open", {});
        });
    }
}

export default MDT;
