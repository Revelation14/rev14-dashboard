module.exports = {
  apps: [
    {
      name: 'dashboard',
      script: 'yarn',
      args: 'start',
      error_file: '~/pm2-logs/dashboard-error.log',
      out_file: '~/pm2-logs/dashboard-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
};
