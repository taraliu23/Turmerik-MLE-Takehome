"use client";
import React from "react";

interface CardProps {
	title: string;
	description: string;
	link: string;
}

const Card: React.FC<CardProps> = ({ title, description, link }) => {
	return (
		<div className="card">
			<h2>{title}</h2>
			<p>{description}</p>
			<a href={link} target="_blank" rel="noopener noreferrer">
				Open Chatbox
			</a>
			<style jsx>{`
        .card {
          border: 1px solid #eaeaea;
          border-radius: 10px;
          padding: 1.5rem;
          margin: 1rem 0;
          text-align: center;
          transition: box-shadow 0.2s ease;
        }
        .card:hover {
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
        }
        a {
          color: #0070f3;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
		</div>
	);
};

export default Card;
