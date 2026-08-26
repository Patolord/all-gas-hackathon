import { v } from "convex/values";

import { mutation, query } from "./_generated/server";

const COUNTER_NAME = "default";

export const get = query({
  args: {},
  returns: v.number(),
  handler: async (ctx) => {
    const counter = await ctx.db
      .query("counters")
      .withIndex("by_name", (q) => q.eq("name", COUNTER_NAME))
      .unique();

    return counter?.value ?? 0;
  },
});

export const adjust = mutation({
  args: {
    amount: v.number(),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("counters")
      .withIndex("by_name", (q) => q.eq("name", COUNTER_NAME))
      .unique();

    if (existing === null) {
      await ctx.db.insert("counters", {
        name: COUNTER_NAME,
        value: args.amount,
      });
      return null;
    }

    await ctx.db.patch(existing._id, {
      value: existing.value + args.amount,
    });
    return null;
  },
});
