import { httpRouter } from "convex/server";
import { AgentMail } from "@agentmail/convex";

import { httpAction } from "./_generated/server";
import { components } from "./_generated/api";

const agentmail = new AgentMail(components.agentmail);
const http = httpRouter();

http.route({
  path: "/agentmail/webhook",
  method: "POST",
  handler: httpAction(async (ctx, req) =>
    agentmail.handleWebhook(
      // httpAction ctx.runMutation is a superset of AgentMail's RunMutationCtx.
      { runMutation: ctx.runMutation } as Parameters<AgentMail["handleWebhook"]>[0],
      req,
    ),
  ),
});

export default http;
