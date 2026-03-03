// Automated Project Updater
// This script reads resume content and updates Projects section with GitHub links

import React from "react";

// GitHub API configuration
const GITHUB_USERNAME = "Subrat0007s";
const GITHUB_API_BASE = "https://api.github.com";

/**
 * Extract project names from resume content
 * This reads the actual project titles from your resume component
 */
export const extractProjectsFromResume = () => {
  // Current projects from your resume (update this when you add new projects)
  const resumeProjects = [
    {
      title: "Event Booking System",
      keywords: ["event", "booking", "management", "system"],
    },
    {
      title: "Online Bus Booking System",
      keywords: ["bus", "booking", "sathi", "reservation"],
    },
    // Add new projects here when you update your resume
    // Example:
    // {
    //   title: "Your New Project Name",
    //   keywords: ["keyword1", "keyword2", "keyword3"]
    // }
  ];

  return resumeProjects.map((project) => ({
    ...project,
    githubSearchName: project.title.replace(/\s+/g, "-").toLowerCase(),
  }));
};

/**
 * Search GitHub for a repository
 */
export const searchGitHubRepo = async (repoName) => {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}`,
    );

    if (response.ok) {
      const repoData = await response.json();
      return {
        found: true,
        url: repoData.html_url,
        description: repoData.description || "No description available",
        language: repoData.language || "Unknown",
        stars: repoData.stargazers_count || 0,
      };
    }

    // If exact match not found, try searching
    return await searchGitHubRepos(repoName);
  } catch (error) {
    console.error(`Error searching for ${repoName}:`, error);
    return { found: false, url: null };
  }
};

/**
 * Search GitHub repositories with keywords
 */
export const searchGitHubRepos = async (searchTerm) => {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/search/repositories?q=${encodeURIComponent(searchTerm)}+user:${GITHUB_USERNAME}&sort=updated&order=desc&per_page=10`,
    );

    if (response.ok) {
      const data = await response.json();
      const repo = data.items[0]; // Get first/best match

      if (repo) {
        return {
          found: true,
          url: repo.html_url,
          description: repo.description || "No description available",
          language: repo.language || "Unknown",
          stars: repo.stargazers_count || 0,
        };
      }
    }

    return { found: false, url: null };
  } catch (error) {
    console.error(`Error searching GitHub for ${searchTerm}:`, error);
    return { found: false, url: null };
  }
};

/**
 * Smart GitHub search with multiple strategies
 */
export const smartGitHubSearch = async (project) => {
  console.log(`🔍 Searching GitHub for: ${project.title}`);

  // Strategy 1: Try exact match with dashes
  let githubData = await searchGitHubRepo(project.githubSearchName);

  if (githubData.found) {
    console.log(`✅ Found exact match: ${project.githubSearchName}`);
    return githubData;
  }

  // Strategy 2: Try with keywords
  for (const keyword of project.keywords) {
    githubData = await searchGitHubRepos(keyword);
    if (githubData.found) {
      console.log(`✅ Found with keyword "${keyword}": ${githubData.url}`);
      return githubData;
    }
  }

  // Strategy 3: Try variations of the name
  const variations = [
    project.githubSearchName,
    project.githubSearchName.replace(/-/g, ""),
    project.githubSearchName.replace(/system/g, ""),
    project.githubSearchName.replace(/management/g, ""),
    project.title.toLowerCase().replace(/\s+/g, ""),
    project.title.toLowerCase().replace(/\s+/g, "-"),
    ...project.keywords.map((k) => k.toLowerCase()),
  ];

  for (const variation of [...new Set(variations)]) {
    if (variation !== project.githubSearchName) {
      githubData = await searchGitHubRepo(variation);
      if (githubData.found) {
        console.log(
          `✅ Found with variation "${variation}": ${githubData.url}`,
        );
        return githubData;
      }
    }
  }

  console.log(`❌ No GitHub repository found for: ${project.title}`);
  return { found: false, url: null };
};

/**
 * Update Projects component with GitHub data
 */
export const updateProjectsWithGitHub = async () => {
  const projects = extractProjectsFromResume();
  const updatedProjects = [];

  for (const project of projects) {
    const githubData = await smartGitHubSearch(project);

    updatedProjects.push({
      ...project,
      github: githubData,
    });
  }

  return updatedProjects;
};

/**
 * Generate project card data for Projects component
 */
export const generateProjectCards = async () => {
  const projects = await updateProjectsWithGitHub();

  // Map to existing image assets
  const imageAssets = [
    require("../../Assets/Projects/chatify.png"),
    require("../../Assets/Projects/leaf.png"),
    require("../../Assets/Projects/codeEditor.png"),
  ];

  return projects.map((project, index) => {
    let imgPath = imageAssets[index] || imageAssets[2];
    let description;
    let ghLink;

    // Use GitHub data if available
    if (project.github.found) {
      description = project.github.description;
      ghLink = project.github.url;
    } else {
      // Use enhanced descriptions from resume
      const fallbackDescriptions = {
        "Event Booking System":
          "A full-stack web application for event management with user authentication, event CRUD operations, and registration management. Built with React.js frontend and Spring Boot backend, featuring REST APIs and MySQL database integration.",
        "Online Bus Booking System":
          "A full-stack bus reservation system built with Spring Boot, React, and MySQL. Features include route search, schedule viewing, and ticket booking. Implemented secure authentication and responsive UI.",
      };

      description =
        fallbackDescriptions[project.title] ||
        `${project.title} - View resume for details.`;
      ghLink = `https://github.com/${GITHUB_USERNAME}`;
    }

    return {
      imgPath,
      title: project.title,
      description,
      ghLink,
      isBlog: false,
      githubFound: project.github.found,
      language: project.github.language,
      stars: project.github.stars,
    };
  });
};

/**
 * Manual trigger for project updates
 * Call this function when you update your resume
 */
export const triggerProjectUpdate = async () => {
  console.log("🔄 Starting automated project sync from resume...");

  try {
    const projectCards = await generateProjectCards();
    console.log("✅ Projects synced successfully:", projectCards);

    // Show summary
    const foundCount = projectCards.filter((p) => p.githubFound).length;
    const totalCount = projectCards.length;
    console.log(
      `📊 Summary: ${foundCount}/${totalCount} projects found on GitHub`,
    );

    return projectCards;
  } catch (error) {
    console.error("❌ Error syncing projects:", error);
    return null;
  }
};

/**
 * Add new project to automation
 * Call this when you add a new project to your resume
 */
export const addNewProject = (projectTitle, keywords = []) => {
  console.log(`➕ Adding new project to automation: ${projectTitle}`);

  // This would typically update a config file or database
  // For now, it logs the new project for manual addition
  const newProject = {
    title: projectTitle,
    keywords: [projectTitle.toLowerCase().replace(/\s+/g, "-"), ...keywords],
  };

  console.log("📝 Add this to extractProjectsFromResume():", newProject);
  console.log('💡 Then click "Refresh Projects" button to sync');

  return newProject;
};

// Export for use in Projects component
export default {
  extractProjectsFromResume,
  updateProjectsWithGitHub,
  generateProjectCards,
  triggerProjectUpdate,
  addNewProject,
  smartGitHubSearch,
};
