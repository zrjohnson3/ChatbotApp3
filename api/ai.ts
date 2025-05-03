import React from 'react'
import axios from 'axios';

interface ChatMessage {
    role: 'system' | 'user' | 'assistant';
    content: string;
}

interface ChatOptions {
    temperature?: number;
    max_tokens?: number;
    model?: string;
}

// Detailed product information
const PRODUCT_CATALOG = {
    aiPlatform: {
        name: "URI AI Platform",
        pricing: {
            starter: { price: 299, period: "month", features: ["Basic API access", "5 AI models", "100k requests/month"] },
            professional: { price: 999, period: "month", features: ["Advanced API access", "15 AI models", "500k requests/month"] },
            enterprise: { price: 4999, period: "month", features: ["Full API access", "Unlimited models", "Custom requests limit"] }
        },
        technicalSpecs: {
            apiLatency: "< 100ms",
            uptime: "99.99%",
            supportedFrameworks: ["TensorFlow", "PyTorch", "JAX"],
            deploymentOptions: ["Cloud", "On-premise", "Hybrid"]
        },
        useCase: ["Natural Language Processing", "Computer Vision", "Speech Recognition"]
    },
    aiStudio: {
        name: "URI AI Studio",
        pricing: {
            basic: { price: 49, period: "month", features: ["Model training UI", "Basic templates", "Community support"] },
            team: { price: 199, period: "month", features: ["Team collaboration", "Custom templates", "Priority support"] },
            enterprise: { price: 999, period: "month", features: ["Enterprise features", "Custom development", "Dedicated support"] }
        },
        technicalSpecs: {
            supportedDataTypes: ["Text", "Images", "Audio", "Structured Data"],
            modelTypes: ["Classification", "Regression", "Clustering", "Neural Networks"],
            integrations: ["GitHub", "GitLab", "Bitbucket", "AWS", "Azure", "GCP"]
        }
    }
};

// Company information
const COMPANY_INFO = {
    about: `URI AI is a leading artificial intelligence solutions provider founded in 2020.
    We specialize in making AI technology accessible and practical for businesses of all sizes.
    Our headquarters is in University of Rhode Island, found inside the URI Library in Kingston, RI. 
    We are a team of 50+ students and faculty members who are passionate about AI and its applications.`,
    
    mission: `To democratize AI technology and empower businesses with intelligent solutions that drive growth and innovation.`,
    
    values: [
        "Innovation First: We constantly push the boundaries of AI technology",
        "Customer Success: Our clients' success is our success",
        "Ethical AI: We promote responsible and transparent AI development",
        "Continuous Learning: We evolve with the rapidly changing AI landscape"
    ],
    
    support: {
        availability: "24/7",
        channels: ["Email", "Phone", "Live Chat", "Video Call"],
        responseTime: {
            critical: "< 1 hour",
            high: "< 4 hours",
            normal: "< 24 hours"
        },
        locations: ["US", "Europe", "Asia-Pacific"]
    }
};

// Technical documentation structure
const TECHNICAL_DOCS = {
    gettingStarted: {
        quickStart: "Step-by-step guide to implement URI AI Platform",
        authentication: "API key management and security best practices",
        firstAPI: "Making your first API call"
    },
    
    apiReference: {
        endpoints: ["POST /v1/predict", "GET /v1/models", "POST /v1/train"],
        authentication: "Bearer token authentication required for all endpoints",
        rateLimit: "100 requests per minute per API key"
    },
    
    commonIssues: {
        authentication: ["Invalid API key", "Expired token", "Rate limit exceeded"],
        deployment: ["Connection timeout", "Model loading errors", "Memory issues"],
        training: ["Data format errors", "Insufficient training data", "Model convergence issues"]
    },
    
    bestPractices: [
        "Always validate input data before sending to API",
        "Implement proper error handling",
        "Use batch processing for large datasets",
        "Monitor API usage and set up alerts",
        "Regular model retraining with new data"
    ]
};

// URI AI Lab specific information
export interface Project {
    name: string;
    description: string;
    status: string;
    team: string[];
    technologies: string[];
    goals: string[];
    partners: string[];
    timeline: string;
    funding: string;
}

export interface CompletedProject {
    name: string;
    description: string;
    completionDate: string;
    impact: string;
    technologies: string[];
    outcomes: string[];
}

export interface UpcomingProject {
    name: string;
    description: string;
    startDate: string;
    team: string[];
    technologies: string[];
    goals: string[];
}

export interface URI_LAB_INFO_TYPE {
    location: {
        building: string;
        address: string;
        directions: string;
        hours: string;
        parking: string;
    };
    team: {
        size: string;
        composition: string[];
        expertise: string[];
    };
    projects: {
        current: Project[];
        completed: CompletedProject[];
        upcoming: UpcomingProject[];
    };
    research: {
        areas: string[];
        publications: string;
        collaborations: string[];
    };
    contact: {
        email: string;
        phone: string;
        social: {
            twitter: string;
            linkedin: string;
            github: string;
        };
    };
    facilities: {
        equipment: string[];
        resources: string[];
    };
}

export const URI_LAB_INFO: URI_LAB_INFO_TYPE = {
    location: {
        building: "URI Library",
        address: "Carothers Library, Room 147, 15 Lippitt Rd, Kingston, RI 02881",
        directions: "Located inside the URI Library main building",
        hours: "Monday-Friday: 9:00 AM - 5:00 PM",
        parking: "Available in the library parking lot"
    },
    
    team: {
        size: "50+ members",
        composition: [
            "Faculty researchers",
            "Graduate students",
            "Undergraduate researchers",
            "Industry partners"
        ],
        expertise: [
            "Machine Learning",
            "Natural Language Processing",
            "Computer Vision",
            "Robotics",
            "Data Science"
        ]
    },

    projects: {
        current: [
            {
                name: "AI-powered Chatbots for Small Businesses",
                description: "Developing affordable and easy-to-implement chatbot solutions for small businesses. We are creating chatbots that can handle customer service tasks like order tracking, inventory management, and customer support.",
                status: "Active",
                team: ["Faculty Lead", "2 Graduate Students", "3 Undergraduate Students"],
                technologies: ["React Native", "Node.js", "OpenAI API", "Python", "TensorFlow"],
                goals: [
                    "Create user-friendly chatbot development platform",
                    "Implement multi-language support",
                    "Develop industry-specific templates",
                    "Ensure GDPR and data privacy compliance"
                ],
                partners: ["Local Business Association", "Small Business Development Center"],
                timeline: "12 months",
                funding: "AI Lab + URI Small Business Development Center"
            },
            {
                name: "AI-powered Document Analyzer for the Department of Emergency Management",
                description: "Developing a documnent analyzer for the Department of Emergency Management to help them analyze and understand new documents and add the important informatoin into their master document. This project uses AI to anaylze the documents and then Python to merge, format, and output the information into the master document.",
                status: "Active",
                team: ["Faculty Lead", "2 Graduate Students", "3 Undergraduate Students"],
                technologies: ["Python + FastAPI", "React + Vite", "Node.js", "OpenAI API"],
                goals: [
                    "Create user-friendly chatbot development platform",
                    "Implement multi-language support",
                    "Develop industry-specific templates",
                    "Ensure GDPR and data privacy compliance"
                ],
                partners: ["Department of Emergency Management"],
                timeline: "6 months",
                funding: "Department of Emergency Management"
            },
            {
                name: "Virtual Reality SVM (Support Vector Machine) Training Game",
                description: "Developing a virtual reality game to help train students to use SVMs (Support Vector Machines) to classify data. This project uses Unity and Python to create the game and train the SVMs.",
                status: "Active",
                team: ["Faculty Lead", "2 Graduate Students", "3 Undergraduate Students"],
                technologies: ["Unity"],
                goals: [
                    "Create user-friendly chatbot development platform",
                    "Implement multi-language support",
                    "Develop industry-specific templates",
                    "Ensure GDPR and data privacy compliance"
                ],
                partners: ["Department of Computer Science", "AI Lab"],
                timeline: "6 months",
                funding: "Department of Computer Science, AI Lab, URI Small Business Development Center"
            },
            {
                name: "Ocean Fish Classification using Object Detection",
                description: "Detecting and classifying fish in images to help URI's Oceanography Department and Department of Environmental Management and Planning with their ocean monitoring and management efforts. This project uses Python and TensorFlow to create the model and detect the fish.",
                status: "Active",
                team: ["Faculty Lead", "2 Graduate Students", "3 Undergraduate Students"],
                technologies: ["Python", "TensorFlow", "OpenCV", "YOLO"],
                goals: [
                    "Create user-friendly chatbot development platform",
                    "Implement multi-language support",
                    "Develop industry-specific templates",
                    "Ensure GDPR and data privacy compliance"
                ],
                partners: ["Department of Environmental Management and Planning", "Department of Oceanography"],
                timeline: "6 months",
                funding: "Department of Environmental Management and Planning, Department of Oceanography"
            },
            {
                name: "Ethics in AI",
                description: "Research project focusing on ethical considerations in AI development and deployment",
                status: "Active",
                team: ["Ethics Professor", "AI Researchers", "Law School Faculty"],
                technologies: ["Python", "Natural Language Processing", "Ethical AI Frameworks"],
                goals: [
                    "Develop ethical guidelines for AI development",
                    "Create assessment tools for AI bias",
                    "Study societal impact of AI decisions",
                    "Propose regulatory frameworks"
                ],
                partners: ["AI Ethics Institute", "Law School", "Industry Advisory Board"],
                timeline: "18 months",
                funding: "Research Grant"
            },
            {
                name: "Natural Language Processing Projects",
                description: "Advanced NLP research and applications development",
                status: "Active",
                team: ["NLP Specialist", "4 Graduate Students", "2 Industry Experts"],
                technologies: ["BERT", "GPT", "Transformer Models", "PyTorch"],
                goals: [
                    "Improve language model efficiency",
                    "Develop domain-specific NLP solutions",
                    "Create multilingual processing tools",
                    "Enhance sentiment analysis accuracy"
                ],
                partners: ["Tech Companies", "Research Institutions"],
                timeline: "24 months",
                funding: "Multiple Industry Grants"
            },
            {
                name: "AI for Everyone - AI Literacy Program",
                description: "Educational initiative to make AI concepts accessible to the general public",
                status: "Active",
                team: ["Education Specialist", "AI Researchers", "Content Developers"],
                technologies: ["Interactive Learning Platforms", "Visualization Tools", "Online Courseware"],
                goals: [
                    "Create beginner-friendly AI curriculum",
                    "Develop interactive learning materials",
                    "Organize community workshops",
                    "Build online learning platform"
                ],
                partners: ["Local Schools", "Community Centers", "Public Libraries"],
                timeline: "Ongoing",
                funding: "Education Grant"
            }
        ],
        completed: [
  
        ],
        upcoming: [
            {
                name: "Autonomous Robotics Research",
                description: "Research in autonomous systems and robotics",
                startDate: "Q2 2024",
                team: ["Robotics Expert", "2 Graduate Students"],
                technologies: ["ROS", "Computer Vision", "Machine Learning"],
                goals: [
                    "Develop autonomous navigation systems",
                    "Create object recognition models",
                    "Implement safety protocols"
                ]
            }
        ]
    },

    research: {
        areas: [
            "AI Ethics and Governance",
            "Natural Language Understanding",
            "Computer Vision Applications",
            "AI for Everyone",
            "Applied AI in Healthcare",
            "Autonomous Systems",
        ],
        publications: "Over 100 research papers published",
        collaborations: [
            "Industry partnerships",
            "Academic institutions",
            "Research organizations"
        ]
    },

    contact: {
        email: "ai.lab@uri.edu",
        phone: "(401) XXX-XXXX",
        social: {
            twitter: "@URIAILab",
            linkedin: "URI AI Laboratory",
            github: "URI-AI-Lab"
        }
    },

    facilities: {
        equipment: [
            "High-performance computing cluster",
            "GPU workstations",
            "Robotics lab",
            "Testing environments"
        ],
        resources: [
            "Research libraries",
            "Dataset collections",
            "Development tools",
            "Collaboration spaces"
        ]
    }
};

// Add structured information retrieval functions
const getStructuredInfo = {
    products: () => {
        const { aiPlatform, aiStudio } = PRODUCT_CATALOG;
        return {
            platform: {
                name: aiPlatform.name,
                pricing: Object.entries(aiPlatform.pricing).map(([tier, details]) => 
                    `${tier}: $${details.price}/${details.period} - ${details.features.join(', ')}`
                ).join('\n'),
                specs: `API Latency: ${aiPlatform.technicalSpecs.apiLatency}, Uptime: ${aiPlatform.technicalSpecs.uptime}`
            },
            studio: {
                name: aiStudio.name,
                pricing: Object.entries(aiStudio.pricing).map(([tier, details]) => 
                    `${tier}: $${details.price}/${details.period} - ${details.features.join(', ')}`
                ).join('\n')
            }
        };
    },
    
    company: () => {
        const { about, mission, values, support } = COMPANY_INFO;
        return {
            about,
            mission,
            values: values.join('\n'),
            support: `Available ${support.availability} via ${support.channels.join(', ')}`
        };
    },
    
    technical: () => {
        const { gettingStarted, apiReference, commonIssues, bestPractices } = TECHNICAL_DOCS;
        return {
            gettingStarted: Object.entries(gettingStarted).map(([key, value]) => `${key}: ${value}`).join('\n'),
            api: `Endpoints: ${apiReference.endpoints.join(', ')}\nAuth: ${apiReference.authentication}\nRate Limit: ${apiReference.rateLimit}`,
            issues: Object.entries(commonIssues).map(([category, issues]) => 
                `${category}: ${issues.join(', ')}`
            ).join('\n'),
            bestPractices: bestPractices.join('\n')
        };
    }
};

// Simplified base system message
const BASE_SYSTEM_MESSAGE = `You are the URI AI Lab's intelligent assistant. Only provide information from the URI AI Lab knowledge base.`;

// Add caching for responses
const responseCache = new Map<string, string>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Add request debouncing
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 500; // 500ms between requests

// Add validation for project information
const validateProjectInfo = (projectName: string): boolean => {
    const validProjects = URI_LAB_INFO.projects.current.map(p => p.name.toLowerCase());
    return validProjects.includes(projectName.toLowerCase());
};

// Add function to get project team info
const getProjectTeamInfo = (projectName: string): string | null => {
    const project = URI_LAB_INFO.projects.current.find(p => 
        p.name.toLowerCase() === projectName.toLowerCase()
    );
    if (project) {
        return `The ${project.name} project team includes: ${project.team.join(', ')}.`;
    }
    return null;
};

// Add validation for team information
const validateTeamInfo = (query: string): boolean => {
    const teamComposition = URI_LAB_INFO.team.composition;
    const teamExpertise = URI_LAB_INFO.team.expertise;
    
    // Check if query is about general team composition or expertise
    const isGeneralTeamQuery = teamComposition.some(comp => 
        query.toLowerCase().includes(comp.toLowerCase())
    ) || teamExpertise.some(exp => 
        query.toLowerCase().includes(exp.toLowerCase())
    );
    
    return isGeneralTeamQuery;
};

// Add function to get rich project info
const getRichProjectInfo = (projectName: string): string | null => {
    const project = URI_LAB_INFO.projects.current.find(p => 
        p.name.toLowerCase() === projectName.toLowerCase()
    );
    if (project) {
        return `Project: ${project.name}
Description: ${project.description}
Status: ${project.status}
Team: ${project.team.join(', ')}
Technologies: ${project.technologies.join(', ')}
Goals: ${project.goals.join(', ')}
Partners: ${project.partners.join(', ')}
Timeline: ${project.timeline}
Funding: ${project.funding}`;
    }
    return null;
};

// Add function to get rich research info
const getResearchInfo = (): string => {
    const { areas, publications, collaborations } = URI_LAB_INFO.research;
    return `Research Areas:
${areas.join('\n')}

Publications: ${publications}

Collaborations:
${collaborations.join('\n')}`;
};

// Add function to get rich facilities info
const getFacilitiesInfo = (): string => {
    const { equipment, resources } = URI_LAB_INFO.facilities;
    return `Equipment:
${equipment.join('\n')}

Resources:
${resources.join('\n')}`;
};

// Add retry configuration
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

// Add fallback responses
const FALLBACK_RESPONSES = {
    networkError: "I'm having trouble connecting to my knowledge base. Please try again in a moment. If the problem persists, you can contact us at ai.lab@uri.edu",
    apiError: "I'm experiencing technical difficulties. Please try again later or contact ai.lab@uri.edu for assistance",
    generalError: "I apologize, but I'm having trouble processing your request. Please try again or contact ai.lab@uri.edu for help"
};

// Add retry logic
const retryWithDelay = async (fn: () => Promise<any>, retries: number = MAX_RETRIES): Promise<any> => {
    try {
        return await fn();
    } catch (error) {
        if (retries > 0) {
            await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
            return retryWithDelay(fn, retries - 1);
        }
        throw error;
    }
};

// Simplified context retrieval - directly extracts the most relevant information
const getDirectContext = (message: string): string => {
    const messageLower = message.toLowerCase();
    let context = '';
    
    // Add base context to every query
    context += `URI AI Lab is located at URI Library, Room 147, 15 Lippitt Rd, Kingston, RI. The lab has 50+ members with expertise in Machine Learning, NLP, Computer Vision, Robotics, and Data Science. Contact: ai.lab@uri.edu.\n\n`;
    
    // Extract specific project information
    if (messageLower.includes('project') || messageLower.includes('research') || messageLower.includes('work')) {
        // Check for specific project mentions
        const projectNames = URI_LAB_INFO.projects.current.map(p => p.name.toLowerCase());
        let foundSpecificProject = false;
        
        for (const project of URI_LAB_INFO.projects.current) {
            if (messageLower.includes(project.name.toLowerCase())) {
                context += `${project.name}:\nDescription: ${project.description}\nStatus: ${project.status}\nTeam: ${project.team.join(', ')}\nTechnologies: ${project.technologies.join(', ')}\nGoals: ${project.goals.join(', ')}\n\n`;
                foundSpecificProject = true;
            }
        }
        
        // If no specific project was found, give summary of all projects
        if (!foundSpecificProject) {
            context += "Current Projects:\n" + URI_LAB_INFO.projects.current.map(p => 
                `- ${p.name}: ${p.description} (Status: ${p.status})`
            ).join('\n') + "\n\n";
        }
    }
    
    // Extract team information
    if (messageLower.includes('team') || messageLower.includes('who') || messageLower.includes('people') || messageLower.includes('member')) {
        context += `Team Composition: ${URI_LAB_INFO.team.composition.join(', ')}\nExpertise: ${URI_LAB_INFO.team.expertise.join(', ')}\n\n`;
    }
    
    // Extract research information
    if (messageLower.includes('research') || messageLower.includes('publication') || messageLower.includes('area')) {
        context += `Research Areas: ${URI_LAB_INFO.research.areas.join(', ')}\nPublications: ${URI_LAB_INFO.research.publications}\nCollaborations: ${URI_LAB_INFO.research.collaborations.join(', ')}\n\n`;
    }
    
    // Extract facilities information
    if (messageLower.includes('facilities') || messageLower.includes('equipment') || messageLower.includes('lab')) {
        context += `Facilities:\nEquipment: ${URI_LAB_INFO.facilities.equipment.join(', ')}\nResources: ${URI_LAB_INFO.facilities.resources.join(', ')}\n\n`;
    }
    
    // Extract contact information
    if (messageLower.includes('contact') || messageLower.includes('email') || messageLower.includes('phone') || messageLower.includes('reach')) {
        context += `Contact:\nEmail: ${URI_LAB_INFO.contact.email}\nPhone: ${URI_LAB_INFO.contact.phone}\nSocial Media: Twitter: ${URI_LAB_INFO.contact.social.twitter}, LinkedIn: ${URI_LAB_INFO.contact.social.linkedin}, GitHub: ${URI_LAB_INFO.contact.social.github}\n\n`;
    }
    
    // Extract product information
    if (messageLower.includes('product') || messageLower.includes('platform') || messageLower.includes('studio') || messageLower.includes('pricing')) {
        const { aiPlatform, aiStudio } = PRODUCT_CATALOG;
        
        if (messageLower.includes('platform') || !messageLower.includes('studio')) {
            context += `URI AI Platform:\nPricing:\n`;
            for (const [tier, details] of Object.entries(aiPlatform.pricing)) {
                context += `- ${tier}: $${details.price}/${details.period} - ${details.features.join(', ')}\n`;
            }
            context += `\nTechnical Specs: API Latency: ${aiPlatform.technicalSpecs.apiLatency}, Uptime: ${aiPlatform.technicalSpecs.uptime}\n\n`;
        }
        
        if (messageLower.includes('studio')) {
            context += `URI AI Studio:\nPricing:\n`;
            for (const [tier, details] of Object.entries(aiStudio.pricing)) {
                context += `- ${tier}: $${details.price}/${details.period} - ${details.features.join(', ')}\n`;
            }
            context += `\n`;
        }
    }
    
    // Extract technical documentation
    if (messageLower.includes('api') || messageLower.includes('technical') || messageLower.includes('documentation') || messageLower.includes('guide')) {
        context += `Technical Documentation:\nAPI Endpoints: ${TECHNICAL_DOCS.apiReference.endpoints.join(', ')}\nAuthentication: ${TECHNICAL_DOCS.apiReference.authentication}\nRate Limits: ${TECHNICAL_DOCS.apiReference.rateLimit}\n\n`;
        context += `Best Practices:\n${TECHNICAL_DOCS.bestPractices.join('\n')}\n\n`;
    }
    
    return context;
};

// Simplified fetch response function
export const fetchAIResponse = async (
    inputMessage: string, 
    systemPrompt: string = BASE_SYSTEM_MESSAGE,
    previousMessages: ChatMessage[] = [],
    options: ChatOptions = {}
) => {
    try {
        // Check cache first
        const cacheKey = `${inputMessage}-${JSON.stringify(previousMessages)}`;
        const cachedResponse = responseCache.get(cacheKey);
        if (cachedResponse) {
            return cachedResponse;
        }

        // Implement request debouncing
        const now = Date.now();
        if (now - lastRequestTime < MIN_REQUEST_INTERVAL) {
            await new Promise(resolve => setTimeout(resolve, MIN_REQUEST_INTERVAL - (now - lastRequestTime)));
        }
        lastRequestTime = Date.now();

        // Get direct context for this query
        const relevantContext = getDirectContext(inputMessage);

        // Build messages array
        let messages: ChatMessage[] = [];
        
        // Always start with system message
        messages.push({ 
            role: 'system', 
            content: `${systemPrompt}\n\nHere is information from the URI AI Lab knowledge base to use in your response:\n\n${relevantContext}\n\nIf information is not provided above, say "I don't have specific information about that. Please contact ai.lab@uri.edu for details."` 
        });
        
        // Add conversation history for context (limited to last 3 exchanges)
        if (previousMessages.length > 0) {
            messages = messages.concat(previousMessages.slice(-6));
        }
        
        // Add the new user message
        messages.push({ role: 'user', content: inputMessage });

        // Make API call with retry logic
        const makeApiCall = async () => {
            return await axios.post('https://api.openai.com/v1/chat/completions', {
                model: options.model || 'gpt-3.5-turbo',
                messages: messages,
                temperature: options.temperature || 0.7,
                max_tokens: options.max_tokens || 250,
                presence_penalty: 0.3,
                frequency_penalty: 0.3,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
                },
                timeout: 5000 // 5 seconds timeout - optimized for speed
            });
        };

        const response = await retryWithDelay(makeApiCall);
        const responseContent = response.data.choices[0].message.content;
        
        // Cache the response
        responseCache.set(cacheKey, responseContent);
        setTimeout(() => responseCache.delete(cacheKey), CACHE_DURATION);

        return responseContent;
    } catch (error: any) {
        console.error('Error fetching AI response:', error);
        
        // Handle specific error types
        if (error.code === 'ECONNABORTED') {
            return FALLBACK_RESPONSES.networkError;
        }
        
        if (error.response) {
            console.error('API Error Response:', error.response.data);
            return FALLBACK_RESPONSES.apiError;
        } else if (error.request) {
            return FALLBACK_RESPONSES.networkError;
        } else {
            return FALLBACK_RESPONSES.generalError;
        }
    }
};

// Optimize context retrieval to only include essential information
export const getSpecificContext = (topic: string): string => {
    // Convert topic to lowercase and remove spaces for matching
    const normalizedTopic = topic.toLowerCase().replace(/\s+/g, '');
    
    // Only add detailed context for specific deep-dive queries
    if (!normalizedTopic.includes('detail') && !normalizedTopic.includes('more') && !normalizedTopic.includes('specific')) {
        return ''; // Use system prompt's basic info for most queries
    }
    
    // Smart context matching for detailed queries only
    const contextMap: { [key: string]: string[] } = {
        'location': ['location', 'where', 'address', 'place'],
        'team': ['team', 'who', 'people', 'staff', 'faculty'],
        'projects': ['project', 'research', 'work', 'study'],
        'contact': ['contact', 'reach', 'email', 'phone'],
        'facilities': ['facilities', 'lab', 'equipment', 'resources']
    };

    // Find matching context
    for (const [contextKey, keywords] of Object.entries(contextMap)) {
        if (keywords.some(keyword => normalizedTopic.includes(keyword))) {
            const context = URI_LAB_INFO[contextKey as keyof typeof URI_LAB_INFO];
            return context ? JSON.stringify(context) : '';
        }
    }

    return '';
};

// Enhanced topic detection with confidence scoring and better NLP
interface TopicMatch {
    topic: string;
    confidence: number;
    matchedTerms: string[];
    context: string;
}

const detectTopics = (message: string): TopicMatch[] => {
    const matches: TopicMatch[] = [];
    const messageNormalized = message.toLowerCase();
    const words = messageNormalized.split(/\s+/);
    
    // Enhanced topic keywords with synonyms and related terms
    const topicKeywords = {
        location: {
            keywords: ['where', 'location', 'address', 'place', 'building', 'room', 'find', 'directions'],
            synonyms: ['site', 'venue', 'spot', 'area', 'campus'],
            related: ['parking', 'access', 'entrance', 'map']
        },
        team: {
            keywords: ['who', 'team', 'people', 'staff', 'faculty', 'researcher', 'student'],
            synonyms: ['member', 'expert', 'professor', 'instructor', 'assistant'],
            related: ['contact', 'email', 'phone', 'office']
        },
        projects: {
            keywords: ['project', 'research', 'working', 'study', 'investigation', 'analysis'],
            synonyms: ['initiative', 'program', 'endeavor', 'work', 'development'],
            related: ['funding', 'grant', 'publication', 'results', 'findings']
        },
        contact: {
            keywords: ['contact', 'reach', 'email', 'phone', 'call', 'message'],
            synonyms: ['connect', 'get in touch', 'communicate', 'reach out'],
            related: ['support', 'help', 'assistance', 'inquiry']
        },
        facilities: {
            keywords: ['facilities', 'lab', 'equipment', 'resources', 'tools', 'infrastructure'],
            synonyms: ['space', 'setup', 'environment', 'hardware', 'software'],
            related: ['access', 'availability', 'booking', 'reservation']
        },
        events: {
            keywords: ['event', 'meeting', 'seminar', 'workshop', 'conference', 'presentation'],
            synonyms: ['session', 'gathering', 'program', 'activity'],
            related: ['schedule', 'calendar', 'registration', 'attendance']
        },
        research: {
            keywords: ['research', 'investigation', 'study', 'analysis', 'experiment'],
            synonyms: ['inquiry', 'examination', 'exploration', 'investigation'],
            related: ['methodology', 'findings', 'results', 'publication']
        },
        education: {
            keywords: ['learn', 'teach', 'course', 'class', 'training', 'education'],
            synonyms: ['instruction', 'tutorial', 'workshop', 'program'],
            related: ['curriculum', 'materials', 'resources', 'certification']
        }
    };

    // Helper function to calculate confidence score
    const calculateConfidence = (matchedTerms: string[], context: string): number => {
        let score = 0;
        
        // Base score from number of matched terms
        score += matchedTerms.length * 0.2;
        
        // Context relevance
        if (context.includes('specific') || context.includes('details')) {
            score += 0.3;
        }
        
        // Negation detection
        if (context.includes('not') || context.includes('no') || context.includes('don\'t')) {
            score -= 0.4;
        }
        
        // Question detection
        if (context.includes('?') || context.includes('what') || context.includes('how')) {
            score += 0.2;
        }
        
        return Math.min(Math.max(score, 0), 1);
    };

    // Check for each topic
    Object.entries(topicKeywords).forEach(([topic, terms]) => {
        const matchedTerms: string[] = [];
        let context = '';
        
        // Check keywords
        terms.keywords.forEach(keyword => {
            if (messageNormalized.includes(keyword)) {
                matchedTerms.push(keyword);
                context = messageNormalized.slice(
                    Math.max(0, messageNormalized.indexOf(keyword) - 20),
                    Math.min(messageNormalized.length, messageNormalized.indexOf(keyword) + 20)
                );
            }
        });
        
        // Check synonyms
        terms.synonyms.forEach(synonym => {
            if (messageNormalized.includes(synonym)) {
                matchedTerms.push(synonym);
            }
        });
        
        // Check related terms
        terms.related.forEach(related => {
            if (messageNormalized.includes(related)) {
                matchedTerms.push(related);
            }
        });
        
        // Calculate word proximity bonus
        const proximityBonus = words.some((word, index) => {
            return matchedTerms.some(term => {
                const termIndex = words.indexOf(term);
                return termIndex !== -1 && Math.abs(index - termIndex) <= 2;
            });
        }) ? 0.2 : 0;
        
        if (matchedTerms.length > 0) {
            const confidence = calculateConfidence(matchedTerms, context) + proximityBonus;
            matches.push({
                topic,
                confidence,
                matchedTerms,
                context
            });
        }
    });

    // Sort by confidence and filter low confidence matches
    return matches
        .filter(match => match.confidence > 0.3)
        .sort((a, b) => b.confidence - a.confidence);
};

// Update createConversationContext to use enhanced topic detection
export const createConversationContext = (message: string) => {
    const topicMatches = detectTopics(message);
    let relevantContext = '';

    topicMatches.forEach(match => {
        if (match.confidence > 0.5) {
            const context = getSpecificContext(match.topic);
            if (context) {
                relevantContext += `${context}\n`;
            }
        }
    });

    return relevantContext;
};