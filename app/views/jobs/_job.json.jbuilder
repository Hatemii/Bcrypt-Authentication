json.extract! job, :id, :title, :body, :user_id, :created_at, :updated_at
json.url job_url(job, format: :json)
