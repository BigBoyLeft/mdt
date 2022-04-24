/* eslint-disable prettier/prettier */
import "@citizenfx/server";
import Config from "@/Config";

class Server {
    Config: any;
    authToken: string | string[];
    qbcore: any = null;
    officers: any = [];

    constructor() {
        this.Config = Config;
        this.qbcore = exports["qb-core"].GetCoreObject();
        this.initCore();
    }

    private initCore() {
        if (Config.playerAuthToken) {
            this.authToken = this.genAuthToken();
        }

        onNet("LMDT:Server:initClient", () => {
            let src = global.source;
            let player = this.qbcore.Functions.GetPlayer(source);
            let job = player.PlayerData.job.name;
            
            if (job == "police" || job == "ems") {
                TriggerClientEvent("LMDT:Client:InitClient", src, Config.playerAuthToken ? this.genAuthToken() : this.authToken);
            }
        })

        RegisterCommand("mdt", (source: any) => {
            let player = this.qbcore.Functions.GetPlayer(source);
            let job = player.PlayerData.job.name;
            if (job == "police" || job == "ems") {
                TriggerClientEvent("LMDT:Client:openMDT", source);
            }
        }, false)

        RegisterCommand("mdti", (source: any) => {
            let player = this.qbcore.Functions.GetPlayer(source);
            let job = player.PlayerData.job.name;
            if (job == "police" || job == "ems") {
                let authToken = Config.playerAuthToken ? this.genAuthToken() : this.authToken;
                TriggerClientEvent("LMDT:Client:InitClient", source, authToken);
            }
        }, false)
    }

    public genAuthToken(): string {
        return 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
export default new Server();