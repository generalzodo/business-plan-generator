import Todo from '../models/conversation.model.js';

import { Configuration, OpenAI } from 'openai';
import {  sendMessage} from "../gpt.js";

// Set your OpenAI API key

/**
 * Create a new Todo item.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>}
 */
// Create a new Todo
export const startConversation = async (req, res) => {
  try {
    // const prompt = 'Create a job ad for a nurse in new york to be shared on social media only 150 chars';
    // const prompt = 'Give me 10 interview questions for Nursing locum tenens job role';
    // const possibles = [
    //   {
    //     "role": "user",
    //     "content": `
    //       WFS Estate is a new Real Estate Company, based in Yellowknife, Northwest Territories, Canada. The
    //       company plans to provide renewable short-term accommodations in the form of serviced apartments to
    //       Yellowknife residents and visitors.
    //       The goal is to provide easy access to accommodation without the burden/restrictions of a lease that comes
    //       with annual rentals, while also providing some home cleaning services to support clients during their stay

    //       in the apartments. The company will achieve this by buying and renovating, or building new houses with
    //       one or multiple apartments that can be rented out to clients in need of a living space. Rental period for the
    //       accommodations shall be for a minimum period of 1 week and a maximum of 6 months, renewable at the
    //       client’s request.
    //       Each of the company’s houses will be furnished before it starts being used for accommodation rentals and
    //       there will be weekly cleaning services provided for the residents. There will also be a cleaning and
    //       arranging of the space immediately after a client vacates before a new client is assigned the apartment.
    //       The company will be responsible for all maintenance and repair work done in the house.
    //       Company Staff will include a Property Manager, Maintenance Technichian, and Cleaner
    //       The plan is to start and implement the business in 3 phases:
    //        Part 1 (Short-Term): Buy a duplex that is currently for sale and use it as the first house to initiate its
    //       business. This shall be the main focus of the business plan.
    //        Part 2 (Medium-Term): Buy other houses that will be good for the rental business and renovate them
    //       to suit the desired space requirements.
    //        Part 3 (Long-Term): Buy land and build desired houses for the business needs.
    //       Possible Competitors could be Yellowknife residents using their houses for AirBnB, Real Estate companies
    //       that provide furnished apartment rentals, and hotels that offer long-term rentals.
          
    //       Assume you are an expert business plan writer with over 20 years’ experience writing professional and
    //       bankable business plans for funding and investments. I have a business plan to write and I need your help
    //       with writing it.
    //       Included with this prompt is some background information on the proposed business, so you can fully
    //       understand the context before we begin. I will be providing you with requests for writing various sections
    //       of the business plan and you will then source applicable information (possibly from the internet) and
    //       professionally write those sections for me.
    //       I want the business plan to have information and data that is current and relevant to the business and its
    //       operational location, so while writing you must ensure that you do not just write generic content but use
    //       what is applicable to the proposed business and its operational location/s.
    //       I want you to write in clear and precise language using html, ensuring there are no redundancies in the content. Each seciontion sho Also
    //       use tabular formats to present content where necessary (do not use tables if it is not necessary).

    //       now lets begin with EXECUTIVE SUMMARY

    //       `

    //   },
    //   {
    //     "role": "user",
    //     "content": "now give me a detailed Introduction, it should include detailed Background, detailed Problem/Opportunity Statement,  Our Proposed Solution, Benefits of our Proposed Solution"
    //   },
    //   {
    //     "role": "user",
    //     "content": "now give me the ENTERPRISE CONCEPT, it should include Vision, Mission, Values, Value Offerings (Products and/or Services), Our Value Proposition, Business Objectives, Operational Requirements - (provide content in tabular format),Business Goals - (provide content in tabular format), Exit Strategies"
    //   },
    //   {
    //     "role": "user",
    //     "content": `now give me a detailed OPERATIONAL PLAN, it should include 
    //     -Description of Location/s
    //     -Description of Operational Assets
    //     -List and description of Equipments
    //     -List and description of Business Processes/Activities
    //     -Business Compliance (Regulatory and Operational) - (provide content in tabular format)`
    //   },
    //   {
    //     "role": "user",
    //     "content": `now give me a detailed PERSONNEL PLAN, it should include 
    //     - List of Business Personnel
    //     - Description of each Business Personnel - (provide content in tabular format)`
    //   },
    //   {
    //     "role": "user",
    //     "content": `now give me a detailed PERSONNEL PLAN, it should include 
    //     - List of Business Personnel
    //     - Description of each Business Personnel - (provide content in tabular format: Personnel Role, Requirements, Responsibilities)
    //     -Human Resource Management Plan
    //     -The Management Team`
    //   },
    //   {
    //     "role": "user",
    //     "content": `now give me a detailed  MARKET ANALYSIS, it should include 
    //     -Market Overview
    //     -Demand Drivers - (provide content in tabular format)`
    //   },
    //   {
    //     "role": "user",
    //     "content": `now give me a detailed  MARKETING PLAN, it should include 
    //     -Target Market Segments (Characteristics and Needs/Preferences) - (provide content in tabular format)
    //     -Marketing Strategies
    //     `
    //   },
    //   {
    //     "role": "user",
    //     "content": `now give me a detailed  SALES PLAN, it should include 
    //     -Sales Objectives
    //     -Sales Channels
    //     -Pricing Strategy
    //     -Payment Strategies
    //     -Sales Monitoring and Evaluation
    //     `
    //   },
    // ];
    // let prompt = []
    // let script = ""
    // for await (const key of possibles) {
    //   prompt.push(key)
    //   script = script+ ' '+response.choices[0].message.content
    // }
    const response = await sendMessage(req.body.prompt);
    // console.log('ChatGPT Response:', response);
    res.status(201).json({result: response.choices[0].message.content});
  } catch (error) {
    console.error('Error:', error);
  }
};

export const startAssesment = async (req, res) => {
  try {
    const prompt = 'Give me 10 interview questions for Nursing locum tenens job role. please provide it in an JSON array of objects';
    const response = await sendMessage(prompt);
    console.log('ChatGPT Response:', response);
    res.status(201).json(response.choices[0].message.content);
  } catch (error) {
    console.error('Error:', error);
  }
};
